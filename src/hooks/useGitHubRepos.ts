import { useState, useEffect } from 'react'

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  stargazers_count: number
  language: string | null
  updated_at: string
  fork: boolean
}

export function useGitHubRepos(username: string) {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch repos')
        return r.json()
      })
      .then((data: GitHubRepo[]) => {
        const filtered = data
          .filter(r => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        setRepos(filtered)
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [username])

  return { repos, loading, error }
}

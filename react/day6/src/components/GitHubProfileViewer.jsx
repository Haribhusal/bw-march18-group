import React, { useState, useEffect } from 'react';

export default function GitHubProfileViewer() {
    const [username, setUsername] = useState('octocat'); // Default user
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!username) return;

        setLoading(true);
        setError('');
        setUserData(null);

        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (!response.ok) throw new Error('User not found');
                const data = await response.json();
                setUserData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [username]); // Runs every time `username` changes

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">GitHub Profile Viewer</h1>

            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter GitHub username"
                className="border p-2 w-full mb-4"
            />

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {userData && (
                <div className="border p-4 rounded shadow">
                    <img src={userData.avatar_url} alt="avatar" className="w-24 h-24 rounded-full mb-2" />
                    <h2 className="text-lg font-semibold">{userData.name}</h2>
                    <p className="text-gray-600">@{userData.login}</p>
                    <p>{userData.bio}</p>
                    <p className="text-sm text-gray-500">Public Repos: {userData.public_repos}</p>
                </div>
            )}
        </div>
    );
}

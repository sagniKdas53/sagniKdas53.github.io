import React from 'react';
import { GithubIcon } from './Icons';

const FlagshipProject: React.FC = () => {
  return (
    <div className="flagship">
      <div className="flagship-header">
        <div>
          <div style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '8px', transition: 'color .35s' }}><span>{"//"}</span> Flagship · Personal</div>
          <div className="flagship-title">
            <a href="https://github.com/sagniKdas53/yt-diff" target="_blank" rel="noopener noreferrer">yt-diff</a>
          </div>
        </div>
        <div className="flagship-badges">
          <span className="badge badge-green">v1.2.0</span>
          <span className="badge badge-blue">752 commits</span>
          <span className="badge badge-amber">3 releases</span>
        </div>
      </div>
      <p className="flagship-desc">
        A self-hosted video archival platform built on Deno/TypeScript with a React + Material UI frontend, PostgreSQL database, and Valkey (Redis-compatible) cache — all orchestrated with Docker Compose.
        Monitors YouTube playlists and channels on configurable cron schedules, downloads via yt-dlp with WebSocket real-time progress, and ships with CI/CD via GitHub Actions pushing to GHCR.
      </p>
      <div className="flagship-stats">
        <div className="fstat"><div className="fstat-num">752</div><div className="fstat-label">Git commits</div></div>
        <div className="fstat"><div className="fstat-num">3</div><div className="fstat-label">Releases</div></div>
        <div className="fstat"><div className="fstat-num">6</div><div className="fstat-label">Docker services</div></div>
        <div className="fstat"><div className="fstat-num">30+</div><div className="fstat-label">Env config vars</div></div>
      </div>
      <div className="flagship-features">
        <div className="feature-pill">Semaphore-controlled concurrent downloads with duplicate detection</div>
        <div className="feature-pill">WebSocket real-time progress streaming to the React UI</div>
        <div className="feature-pill">Regex & partial-match search with cross-playlist global: prefix</div>
        <div className="feature-pill">URL canonicalization & /dedup endpoint</div>
        <div className="feature-pill">Signed time-limited download tokens for secure file access</div>
        <div className="feature-pill">Automated cron jobs: cleanup, playlist update, orphan pruning</div>
        <div className="feature-pill">Optional VPN proxy via Gluetun + browser cookie injection</div>
        <div className="feature-pill">Automated daily DB backups with 7-day retention (pgbackups)</div>
      </div>
      <div className="arch-block">
        <div className="arch-label">Stack</div>
        <div className="arch-grid">
          <span className="arch-chip">TypeScript / Deno</span>
          <span className="arch-chip">React + MUI</span>
          <span className="arch-chip">PostgreSQL</span>
          <span className="arch-chip">Valkey (Redis)</span>
          <span className="arch-chip">Docker Compose</span>
          <span className="arch-chip">GitHub Actions</span>
          <span className="arch-chip">GHCR</span>
          <span className="arch-chip">WebSockets</span>
          <span className="arch-chip">JWT Auth</span>
        </div>
      </div>
      <div className="flagship-footer">
        <a href="https://github.com/sagniKdas53/yt-diff" target="_blank" rel="noopener noreferrer" className="gh-link">
          <GithubIcon size={13} />
          sagniKdas53/yt-diff
        </a>
        <span className="badge badge-green">TypeScript 96.6%</span>
        <span className="badge badge-blue">GPL-3.0</span>
      </div>
    </div>
  );
};

export default FlagshipProject;

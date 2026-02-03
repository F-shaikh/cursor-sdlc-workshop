# Git Command Cheatsheet

Quick reference for the git commands you'll use in this workshop.

---

## 🚀 Getting Started

### Clone the Repository
```bash
git clone [REPO_URL]
cd sdlc-workshop
```
**What it does:** Downloads a copy of the project to your computer.

---

## 🌿 Working with Branches

### Create a New Branch
```bash
git checkout -b [branch-name]
```
**What it does:** Creates your own "sandbox" where you can make changes without affecting others.

**Branch naming conventions:**
- Setup: `[team]/setup` (e.g., `team_5/setup`)
- Base MVP: `[team]/base-mvp` (e.g., `team_5/base-mvp`)
- Features: `[your-name]/[feature]` (e.g., `alice/dark-mode`)

### Switch to an Existing Branch
```bash
git checkout [branch-name]
```
**What it does:** Moves you to a different branch.

### See What Branch You're On
```bash
git branch
```
**What it does:** Shows all local branches, with a `*` next to your current one.

---

## 🔄 Staying in Sync

### Pull Latest Changes
```bash
git pull origin main
```
**What it does:** Downloads the latest "official" version of the project to your computer. Always do this before starting new work!

### Check Status
```bash
git status
```
**What it does:** Shows what files you've changed, added, or deleted.

---

## 💾 Saving Your Work

### Stage Your Changes
```bash
git add .
```
**What it does:** Marks ALL your changes as "ready to save." The `.` means "everything."

To stage specific files only:
```bash
git add [filename]
```

### Commit (Save a Snapshot)
```bash
git commit -m "Your message here"
```
**What it does:** Creates a permanent snapshot of your staged changes with a description.

**Good commit messages:**
- `"Add dark mode toggle"`
- `"Fix button alignment"`
- `"[Team] - Initial setup and PRD"`

**Bad commit messages:**
- `"stuff"`
- `"fixed it"`
- `"asdfasdf"`

---

## ☁️ Sharing Your Work

### Push to GitHub
```bash
git push origin [branch-name]
```
**What it does:** Uploads your branch to GitHub so others can see it and you can open a PR.

**Examples:**
```bash
git push origin team_5/setup
git push origin alice/dark-mode
```

---

## 🔀 The Full Workflow

### Starting New Work
```bash
git pull origin main              # Get latest changes
git checkout -b [branch-name]     # Create your branch
# ... do your work in Cursor ...
```

### Finishing Your Work
```bash
git add .                         # Stage all changes
git commit -m "Description"       # Save with a message
git push origin [branch-name]     # Upload to GitHub
# Then open a PR on GitHub!
```

---

## 🆘 Common Issues

### "I'm on the wrong branch!"
```bash
git stash                    # Temporarily save your changes
git checkout [correct-branch]
git stash pop                # Restore your changes
```

### "I need to undo my last commit"
```bash
git reset --soft HEAD~1      # Undo commit but keep changes
```

### "I have merge conflicts!"
1. Open the conflicting file
2. Look for `<<<<<<<`, `=======`, and `>>>>>>>` markers
3. Edit the file to keep what you want
4. `git add .` and `git commit`

### "git push was rejected"
```bash
git pull origin main         # Get the latest changes first
# Fix any conflicts if needed
git push origin [branch-name]
```

---

## 📋 Quick Reference

| Command | What It Does |
|---------|-------------|
| `git clone [url]` | Download a repo |
| `git checkout -b [name]` | Create new branch |
| `git checkout [name]` | Switch branches |
| `git pull origin main` | Get latest changes |
| `git status` | See what's changed |
| `git add .` | Stage all changes |
| `git commit -m "msg"` | Save changes |
| `git push origin [branch]` | Upload to GitHub |

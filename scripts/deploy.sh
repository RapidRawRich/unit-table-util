#!/usr/bin/env bash
set -e

echo "Running verification suite..."
PATH="/opt/homebrew/bin:$PATH" npm run lint
PATH="/opt/homebrew/bin:$PATH" npm test
PATH="/opt/homebrew/bin:$PATH" npm run build

echo "Packaging dist/ into gh-pages branch..."
git add -f dist
TREE_ID=$(git write-tree --prefix=dist)
git reset HEAD dist
COMMIT_ID=$(echo "Deploy unit-table-util to GitHub Pages" | git commit-tree "$TREE_ID")
git branch -f gh-pages "$COMMIT_ID"

echo "Pushing gh-pages branch to origin..."
git push origin gh-pages --force

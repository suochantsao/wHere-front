#!/bin/bash

# Smart Git Commit Script using Claude Agent
# 使用方法: ./smart-commit.sh

echo "🤖 啟動智能 Commit Agent..."
echo "這個腳本將會："
echo "1. 分析當前的 git 變更"
echo "2. 自動生成合適的 commit message"
echo "3. 執行 commit 和 push 操作"
echo ""

# 檢查是否有變更
if git diff-index --quiet HEAD --; then
    echo "❌ 沒有檢測到任何變更"
    exit 1
fi

echo "正在調用 Claude Agent 分析變更..."
echo ""

# 這裡你就可以直接在 Claude Code 中呼叫這個 agent
echo "請在 Claude Code 中執行以下指令："
echo ""
echo "請使用 Task tool 啟動 git-commit-agent，分析當前專案的 git 變更，生成合適的 commit message 並執行 commit 和 push 操作。"
echo ""
echo "或者你可以直接跟我說：'請幫我分析當前變更並自動 commit push'"
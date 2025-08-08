#!/bin/bash

# Auto commit and push script for wHere-front project
# 使用方法: ./deploy.sh "你的commit訊息"

set -e  # 如果任何命令失败就退出

# 檢查是否提供了 commit 訊息
if [ -z "$1" ]; then
    echo "❌ 請提供 commit 訊息"
    echo "使用方法: ./deploy.sh \"你的commit訊息\""
    exit 1
fi

COMMIT_MSG="$1"
CURRENT_BRANCH=$(git branch --show-current)

echo "🔍 檢查當前狀態..."
git status

echo ""
echo "📝 準備提交變更..."
echo "分支: $CURRENT_BRANCH"
echo "訊息: $COMMIT_MSG"

# 詢問確認
read -p "確定要提交並推送嗎? (y/N): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "✅ 添加檔案到暫存區..."
    git add .
    
    echo "📝 創建 commit..."
    git commit -m "$COMMIT_MSG

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
    
    echo "🚀 推送到遠端 $CURRENT_BRANCH 分支..."
    git push origin $CURRENT_BRANCH
    
    echo "✨ 完成！已成功推送到 $CURRENT_BRANCH 分支"
else
    echo "❌ 已取消操作"
    exit 1
fi
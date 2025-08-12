import React from 'react'

const ArticleSummary = ({ post }) => {
  if (!post) return null

  const getKeyPoints = () => {
    if (post.content && typeof post.content !== 'string' && post.content.sections) {
      return post.content.sections
        .filter(section => section.type === 'section')
        .slice(0, 3)
        .map(section => section.title)
    }
    return []
  }

  const keyPoints = getKeyPoints()

  return (
    <div className="bg-blue-50 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-blue-900 mb-4">Article Summary</h3>
      <div className="space-y-3">
        <div>
          <h4 className="font-medium text-blue-800 mb-2">What you'll learn:</h4>
          <p className="text-blue-700 text-sm leading-relaxed">
            {post.excerpt}
          </p>
        </div>
        
        {keyPoints.length > 0 && (
          <div>
            <h4 className="font-medium text-blue-800 mb-2">Key topics covered:</h4>
            <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
              {keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex items-center gap-4 text-blue-700 text-sm">
          <span>📖 {post.readTime || '5 min read'}</span>
          <span>📅 {post.date}</span>
        </div>
      </div>
    </div>
  )
}

export default ArticleSummary

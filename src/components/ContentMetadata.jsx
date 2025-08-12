import React from 'react'

const ContentMetadata = ({ post }) => {
  if (!post) return null

  const getContentStats = () => {
    if (post.content && typeof post.content !== 'string' && post.content.sections) {
      const sections = post.content.sections
      const totalSections = sections.length
      const subsections = sections.reduce((acc, section) => {
        return acc + (section.subsections ? section.subsections.length : 0)
      }, 0)
      const lists = sections.reduce((acc, section) => {
        return acc + (section.list ? 1 : 0) + 
               (section.subsections ? section.subsections.filter(sub => sub.list).length : 0)
      }, 0)
      
      return { totalSections, subsections, lists }
    }
    return null
  }

  const stats = getContentStats()

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6">
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="font-medium">Category:</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
            {post.category}
          </span>
        </div>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="font-medium">Tags:</span>
            <div className="flex gap-1">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {stats && (
          <div className="flex items-center gap-2">
            <span className="font-medium">Content:</span>
            <span className="text-xs">
              {stats.totalSections} sections, {stats.subsections} subsections
            </span>
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <span className="font-medium">Reading time:</span>
          <span className="text-xs">{post.readTime || '5 min read'}</span>
        </div>
      </div>
    </div>
  )
}

export default ContentMetadata
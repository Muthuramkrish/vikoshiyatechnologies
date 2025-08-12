import React from 'react'
import { Link } from 'react-router-dom'

const RelatedArticles = ({ currentPost, allPosts }) => {
  if (!currentPost || !allPosts) return null

  // Filter out the current post and get related posts by category or tags
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPost.id)
    .filter(post => 
      post.category === currentPost.category ||
      (currentPost.tags && post.tags && 
       currentPost.tags.some(tag => post.tags.includes(tag)))
    )
    .slice(0, 3)

  if (relatedPosts.length === 0) return null

  return (
    <section className="bg-gray-50 py-12 mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Link to={`/blog/${post.id}`} className="block">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-32 object-cover"
                />
              </Link>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="block">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedArticles





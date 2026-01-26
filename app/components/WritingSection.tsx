'use client'

import { writingSamples, multimediaProjects } from '../data/work-samples'
import ScrollAnimation from './ScrollAnimation'

export default function WritingSection() {
  return (
    <ScrollAnimation>
      <div className="space-y-12">
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Writing & Published Articles
        </h3>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-6">
          {writingSamples.map((article) => (
            <div
              key={article.id}
              className="border-l-4 border-gray-300 pl-6 py-2 hover:border-gray-900 transition-colors"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {article.title}
              </h4>
              <p className="text-gray-600 mb-1">{article.publication}</p>
              <p className="text-sm text-gray-500 mb-3">{article.year}</p>
              {article.url && article.url !== '#' && (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-2 py-1 bg-gray-900 text-xs text-white rounded hover:bg-gray-800 transition-colors text-sm font-medium cursor-pointer"
                >
                  View Article
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Digital Multimedia Projects
        </h3>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-6">
          {multimediaProjects.map((project) => (
            <div
              key={project.id}
              className="border-l-4 border-gray-300 pl-6 py-2 hover:border-gray-900 transition-colors"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h4>
              <p className="text-gray-600 mb-1">{project.client}</p>
              <p className="text-sm text-gray-500 mb-3">{project.year}</p>
              {project.url && project.url !== '#' && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-2 py-1 bg-gray-900 text-xs text-white rounded hover:bg-gray-800 transition-colors text-sm font-medium cursor-pointer"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700">
            <strong>Podcast Editing:</strong> Straight Talk With Hank Paulson
            podcast episodes, including interviews with Hillary Clinton, George W.
            Bush, and Rahm Emanuel.
          </p>
        </div>
      </div>
      </div>
    </ScrollAnimation>
  )
}

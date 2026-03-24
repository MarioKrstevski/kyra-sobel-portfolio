'use client'

import { writingSamples, multimediaProjects } from '../data/work-samples'
import ScrollAnimation from './ScrollAnimation'

type WritingArticle = { id: number; title: string; publication: string; year: string; url: string }
type MultimediaProject = { id: number; title: string; client: string; year: string; url: string }

type WritingSectionProps = {
  writing?: WritingArticle[]
  multimedia?: MultimediaProject[]
}

export default function WritingSection ({ writing, multimedia }: WritingSectionProps) {
  const articles = writing ?? writingSamples
  const projects = multimedia ?? multimediaProjects

  return (
    <ScrollAnimation>
      <div className="space-y-12">
      <div>
        <h3 className="text-3xl font-bold text-heading mb-6">
          Writing & Published Articles
        </h3>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="border-l-4 border-border pl-6 py-2 hover:border-primary transition-colors"
            >
              <h4 className="text-xl font-semibold text-heading mb-2">
                {article.title}
              </h4>
              <p className="text-muted-foreground mb-1">{article.publication}</p>
              <p className="text-sm text-caption mb-3">{article.year}</p>
              {article.url && article.url !== '#' && (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-2 py-1 bg-primary text-xs text-primary-contrast rounded hover:bg-primary-hover transition-colors text-sm font-medium cursor-pointer"
                >
                  View Article
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-heading mb-6">
          Digital Multimedia Projects
        </h3>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-l-4 border-border pl-6 py-2 hover:border-primary transition-colors"
            >
              <h4 className="text-xl font-semibold text-heading mb-2">
                {project.title}
              </h4>
              <p className="text-muted-foreground mb-1">{project.client}</p>
              <p className="text-sm text-caption mb-3">{project.year}</p>
              {project.url && project.url !== '#' && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-2 py-1 bg-primary text-xs text-primary-contrast rounded hover:bg-primary-hover transition-colors text-sm font-medium cursor-pointer"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-card rounded-lg border border-border">
          <p className="text-foreground">
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

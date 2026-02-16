// Work samples data - single source of truth; samples are derived from full arrays

const templePub = 'Temple University College of Education and Human Development'

// --- Social media (images): full list, homepage uses first 4 ---
export const socialMediaSamplesFull = [
  { id: 1, image: '/resources/WebsiteAssetsAndLogos/Social Media Examples/social-media-graphic-2.png', client: 'Paulson Institute', description: 'Social media content creation' },
  { id: 2, image: '/resources/WebsiteAssetsAndLogos/Social Media Examples/social-media-graphic-4.png', client: 'Paulson Institute', description: 'Engaging visual storytelling' },
  { id: 3, image: '/resources/WebsiteAssetsAndLogos/Social Media Examples/social-media-graphic-5.png', client: 'Paulson Institute', description: 'Brand awareness campaign' },
  { id: 4, image: '/resources/WebsiteAssetsAndLogos/Social Media Examples/social-media-graphic-6.png', client: 'Paulson Institute', description: 'Content strategy and design' },
  { id: 5, image: '/resources/WebsiteAssetsAndLogos/Social Media Examples/social-media-graphic-8.png', client: 'Paulson Institute', description: 'Content strategy and design' },
]
export const socialMediaSamples = socialMediaSamplesFull.slice(0, 4)

// --- Paulson Institute links: full list, homepage uses first 3 ---
export const paulsonInstituteLinksFull = [
  { id: 1, url: 'https://www.instagram.com/reel/DA6S1e_o4HG/', title: 'World Migratory Bird Day Content' },
  { id: 2, url: 'https://www.instagram.com/p/C-F1GOfs2Q1/', title: 'Environmental Awareness Campaign' },
  { id: 3, url: 'https://www.instagram.com/reel/DA_WncUO_Si/', title: 'Green Hydrogen Education' },
  { id: 4, url: 'https://www.instagram.com/p/C5RbQGIycz_/', title: 'Paulson Institute Social Content' },
  { id: 5, url: 'https://www.instagram.com/p/C4d1vL6MLD-/', title: 'Paulson Institute Social Content' },
  { id: 6, url: 'https://www.instagram.com/p/Cxs5UaXOmGo/', title: 'Paulson Institute Social Content' },
  { id: 7, url: 'https://www.instagram.com/reel/CwIYAyxogSW/', title: 'Paulson Institute Social Content' },
  { id: 8, url: 'https://www.instagram.com/p/Cu43DL9PNN3/', title: 'Paulson Institute Social Content' },
]
export const paulsonInstituteLinks = paulsonInstituteLinksFull.slice(0, 3)

// --- Photography: full list (all files in folder, simple filenames 1.jpg–31.jpg), homepage uses first 8 ---
const photoBase = '/resources/WebsiteAssetsAndLogos/Website Photography Samples'
const photoCategories = ['Editorial', 'Event', 'Portrait', 'Editorial', 'Event', 'Portrait', 'Editorial', 'Event']
export const photographySamplesFull = Array.from({ length: 31 }, (_, i) => ({
  id: i + 1,
  image: `${photoBase}/${i + 1}.jpg`,
  category: photoCategories[i] ?? 'Photography'
}))
export const photographySamples = photographySamplesFull.slice(0, 8)

// --- Writing: full list, homepage uses subset by index ---
export const writingSamplesFull = [
  { id: 1, title: 'Repairing the Poplar Community One Piece of Food at a Time', publication: 'Philadelphia Neighborhoods', year: '2021', url: 'https://philadelphianeighborhoods.com/2021/10/28/poplar-repairing-the-poplar-community-one-piece-of-food-at-a-time/' },
  { id: 2, title: 'Ready to Fly Program Prepares First-Gen Students for Success', publication: templePub, year: '2021', url: 'https://education.temple.edu/news/2021/07/ready-fly-program-prepares-first-gen-students-success' },
  { id: 3, title: 'Paving a Path in Professional Health Education', publication: templePub, year: '2021', url: 'https://education.temple.edu/news/2021/10/paving-path-professional-health-education' },
  { id: 4, title: 'Top 10 Reasons Why It\'s Great to be a College of Education and Human Development Student', publication: templePub, year: '2022', url: 'https://education.temple.edu/news/2022/07/top-10-reasons-why-its-great-be-college-education-human-development-student' },
  { id: 5, title: 'Faculty Spotlight: Charles A. Price', publication: templePub, year: '2021', url: 'https://education.temple.edu/news/2021/03/faculty-spotlight-charles-price' },
  { id: 6, title: 'How to Help Your Students at Home With Online Learning', publication: templePub, year: '2020', url: 'https://education.temple.edu/news/2020/12/how-help-your-students-home-online-learning' },
  { id: 7, title: 'Faculty Feature: Dr. Jennifer Johnson', publication: templePub, year: '2021', url: 'https://education.temple.edu/news/2021/03/faculty-feature-dr-jennifer-johnson' },
  { id: 8, title: 'Student Feature: Nadine Ibrahim, Class of 2022', publication: templePub, year: '2021', url: 'https://education.temple.edu/news/2021/12/student-feature-nadine-ibrahim-class-2022' },
  { id: 9, title: 'Recognizing National Special Education Day', publication: templePub, year: '2020', url: 'https://education.temple.edu/news/2020/12/recognizing-national-special-education-day' },
  { id: 10, title: 'Tips for Graduates Entering the Workforce', publication: templePub, year: '2020', url: 'https://education.temple.edu/news/2020/11/tips-graduates-entering-workforce' },
  { id: 11, title: 'Advice for Aspiring Educators', publication: templePub, year: '2020', url: 'https://education.temple.edu/news/2020/11/advice-aspiring-educators' },
  { id: 12, title: '2020 Graduate and Temple Professor Awarded Annual Dissertation Award for Literacy Excellence', publication: templePub, year: '2021', url: 'https://education.temple.edu/news/2021/05/2020-graduate-temple-professor-awarded-annual-dissertation-award-literacy-excellence' },
  { id: 13, title: '2021 Commencement Speakers Announced', publication: templePub, year: '2021', url: 'https://education.temple.edu/news/2021/04/2021-commencement-speakers-announced' },
]
export const writingSamples = [writingSamplesFull[0], writingSamplesFull[1], writingSamplesFull[2], writingSamplesFull[4]]

// --- Multimedia: full list, homepage uses first 3 ---
export const multimediaProjectsFull = [
  { id: 1, title: 'The 10 Birds of World Migratory Bird Day 2023', client: 'Paulson Institute', year: '2023', url: 'https://www.paulsoninstitute.org/conservation/conservation-blog/the-10-birds-of-world-migratory-bird-day-2023/' },
  { id: 2, title: 'Invest in Nature', client: 'Paulson Institute', year: '2023', url: 'https://youtu.be/qGhVSwi_3KE?si=okfhTbFQqhnm8DT4' },
  { id: 3, title: 'National Honey Bee Day 2023', client: 'Paulson Institute', year: '2023', url: 'https://youtu.be/XQxLGb8xIrY?si=ZRNPC6GVpRpS5L-Z' },
  { id: 4, title: 'Local Politics and the Global Issues of Biodiversity Loss and Climate Change', client: 'Paulson Institute', year: '2023', url: 'https://www.youtube.com/watch?v=yJthJlwVMq0&t=134s' },
  { id: 5, title: 'Answering the Basic Questions of Green Hydrogen', client: 'Paulson Institute', year: '2024', url: 'https://youtu.be/GUxNe7A7spg?si=pXpfUC2urBSOoNwp' },
  { id: 6, title: 'Hillary Clinton on American Democracy, US-China, & Education', client: 'Straight Talk With Hank Paulson Podcast', year: '2023', url: 'https://www.youtube.com/watch?v=Wj3_rbk0YVc&list=PLh7PzpxJGocSicOnUMNun_PemEXP7ODpT&index=6' },
  { id: 7, title: 'George W. Bush on PEPFAR, Politics, and Leadership', client: 'Straight Talk With Hank Paulson Podcast', year: '2023', url: 'https://youtu.be/eaCZmo2zH9s?si=I88Cbw3rUF6EMUYP' },
  { id: 8, title: 'Rahm Emanuel on Local Politics, US-Japan, and Washington', client: 'Straight Talk With Hank Paulson Podcast', year: '2024', url: 'https://youtu.be/VfV1okDiH0E?si=RvoMZKL6yFMWmnwA' },
  { id: 9, title: 'Pet Adoptions Soar During a Lonely Quarantine', client: 'The Temp', year: '2021', url: 'https://youtu.be/08lFzq_0UbQ?si=dan97TkwddyL29z8' },
  { id: 10, title: 'The Temp April 2020 Broadcast', client: 'The Temp', year: '2020', url: 'https://youtu.be/e6lWoaeVZCM?si=jO-DUQgPfNFdsTMo' },
]
export const multimediaProjects = multimediaProjectsFull.slice(0, 3)

// --- Clients ---
export const clients = [
  { id: 1, name: 'Paulson Institute', logo: '/resources/WebsiteAssetsAndLogos/LOGO-7.png' },
  { id: 2, name: 'Temple University', logo: '/resources/WebsiteAssetsAndLogos/LOGO-8.png' },
  { id: 3, name: 'Philadelphia Neighborhoods', logo: '/resources/WebsiteAssetsAndLogos/LOGO-13.png' },
]

// This is a mock implementation of the Hashnode API service
// In a real implementation, you would use the Hashnode API client

export interface Article {
  id: string;
  title: string;
  brief: string;
  slug: string;
  dateAdded: string;
  coverImage: string;
}

export const fetchArticles = async (username: string): Promise<Article[]> => {
  // In a real implementation, this would make an API call to the Hashnode API
  console.log(`Fetching articles for user: ${username}`);
  
  // Mock data - in a real implementation, this would be actual data from the Hashnode API
  return [
    {
      id: '1',
      title: 'Understanding Design Systems',
      brief: 'A comprehensive guide to creating and implementing design systems in modern applications.',
      slug: 'understanding-design-systems',
      dateAdded: '2023-05-15',
      coverImage: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    },
    {
      id: '2',
      title: 'The Art of Creative Coding',
      brief: 'Exploring the intersection of programming and artistic expression through creative coding examples.',
      slug: 'art-of-creative-coding',
      dateAdded: '2023-03-22',
      coverImage: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    },
  ];
};
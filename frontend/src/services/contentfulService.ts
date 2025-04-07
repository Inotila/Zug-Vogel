export async function fetchAccommodations(): Promise<any[]> {
    try {
      const response = await fetch("http://localhost:5010/api/contentful/entries");
      const data = await response.json();
  
      // Filter for only accommodation entries (those with a 'city' field)
      const filtered = data.filter((item: any) => item.city);
      return filtered;
    } catch (error) {
      console.error("Error fetching accommodations:", error);
      return [];
    }
  }

    // fetch accommodation by slug

  export async function fetchAccommodationBySlug(slug: string): Promise<any | null> {
    try {
      const response = await fetch(`http://localhost:5010/api/contentful/accommodation/${slug}`);
      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching accommodation details:", error);
      return null;
    }
  }

  export const fetchTours = async () => {
    try {
      const response = await fetch('http://localhost:5010/api/contentful/entries?type=tours');
        const data = await response.json();
        console.log('Fetched tours:', data);
        return data;
    } catch (error) {
        console.error('Error fetching tours:', error);
        return [];
    }
};

export const fetchTourBySlug = async (slug: string) => {
    try {
        const response = await fetch(`http://localhost:5010/api/contentful/tour/${slug}`);
        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching tour by slug:', error);
        return null;
    }
};

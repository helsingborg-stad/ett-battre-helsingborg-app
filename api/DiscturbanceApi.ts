interface Disturbance {
  ID: number;
  post_title: string;
  post_content: string;
  post_type: string;
}

export async function fetchDisturbances(apiUrl: string): Promise<Disturbance[]> {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const bigDisturbances = data.big || [];
    const smallDisturbances = data.small || [];

    const disturbances = [...bigDisturbances, ...smallDisturbances];

    disturbances.sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime());

    return disturbances;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

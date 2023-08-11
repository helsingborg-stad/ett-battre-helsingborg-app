import React, { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';

import { fetchDisturbances } from '../../../api/DiscturbanceApi';
import Alert from '../../../components/common/Alert';

const DisturbanceAlert: React.FC = () => {
  const apiUrl = process.env.EXPO_PUBLIC_DISTURBANCE_API || '';
  const [disturbance, setDisturbance] = useState(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDisturbances(apiUrl);
      if (data.length > 0) {
        const firstBigDisturbance = data.find(
          (disturbance) => disturbance.post_type === 'big-disturbance'
        );
        if (firstBigDisturbance) {
          setDisturbance(firstBigDisturbance);
        } else {
          setDisturbance(data[0]);
        }
        return;
      }

      setDisturbance(null);
    }
    fetchData();
  }, []);

  if (disturbance) {
    return (
      <Alert key={disturbance.ID} title={disturbance.post_title}>
        <HTML contentWidth={width} source={{ html: disturbance.post_content }} />
      </Alert>
    );
  }
};

export default DisturbanceAlert;

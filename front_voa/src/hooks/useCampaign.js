import React, { useState, useCallback } from 'react';

export const useCampaign = () => {
  const [campaign, setCampaign] = useState(null);

  const onAddToCampaign = useCallback(
    (campaign = true) => {
      const newCampaign = campaign;
      setCampaign(newCampaign);
      localStorage.setItem('campaign', JSON.stringify(newCampaign));
    },
    [campaign]
  );

  const getCampaign = useCallback(() => {
    const campaignStorage = localStorage.getItem('campaign');
    const campaignSaved = JSON.parse(campaignStorage);
    return campaignSaved;
  })

  const removeCampaign = useCallback(() => {
    localStorage.removeItem('campaign');
    setCampaign(null);
    return true;
  })

  return {
    onAddToCampaign, getCampaign, removeCampaign
  }

}

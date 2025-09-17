
import { useState } from "react";

export interface DailyStats {
  date: string;
  visitors: number;
  pageviews: number;
}

export interface PageStats {
  page: string;
  visitors: number;
  avgTime: string;
}

export interface ReferralStats {
  source: string;
  visitors: number;
  percentage: string;
}

export const useAdminStats = () => {
  // Mock data for visitor statistics
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([
    { date: "2024-05-07", visitors: 127, pageviews: 342 },
    { date: "2024-05-06", visitors: 145, pageviews: 389 },
    { date: "2024-05-05", visitors: 115, pageviews: 301 },
    { date: "2024-05-04", visitors: 98, pageviews: 254 },
    { date: "2024-05-03", visitors: 132, pageviews: 378 },
    { date: "2024-05-02", visitors: 142, pageviews: 395 },
    { date: "2024-05-01", visitors: 156, pageviews: 412 },
  ]);

  // Mock data for page analytics
  const [pageStats, setPageStats] = useState<PageStats[]>([
    { page: "Page d'accueil", visitors: 854, avgTime: "2:34" },
    { page: "Services", visitors: 523, avgTime: "1:47" },
    { page: "Réalisations", visitors: 412, avgTime: "3:21" },
    { page: "À propos", visitors: 289, avgTime: "1:15" },
    { page: "Contact", visitors: 376, avgTime: "0:58" },
  ]);

  // Mock data for referral sources
  const [referralSources, setReferralSources] = useState<ReferralStats[]>([
    { source: "Recherche Google", visitors: 645, percentage: "42%" },
    { source: "Accès direct", visitors: 425, percentage: "28%" },
    { source: "LinkedIn", visitors: 187, percentage: "12%" },
    { source: "Facebook", visitors: 156, percentage: "10%" },
    { source: "Twitter", visitors: 98, percentage: "6%" },
    { source: "Autres", visitors: 32, percentage: "2%" },
  ]);

  const todayStats = {
    visitors: 127,
    pagesViewed: 342,
    visitorsChange: "+12% vs hier",
    pagesViewedChange: "+8% vs hier",
  };

  const monthStats = {
    visitors: 3248,
    pagesViewed: 8917,
    visitorsChange: "+15% vs mois dernier",
    pagesViewedChange: "+22% vs mois dernier",
  };

  return {
    dailyStats,
    pageStats,
    referralSources,
    todayStats,
    monthStats,
  };
};

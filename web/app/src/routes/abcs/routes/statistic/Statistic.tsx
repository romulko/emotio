import Chart from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

import { LoadingIndicator } from '../../../../components/loadingIndicator';
import { NoEntryMessage } from '../../../../components/noEntryMessage';
import { PageContainer } from '../../../../components/pageContainer';
import { PageHeader } from '../../../../components/pageHeader/PageHeader';
import { useStatistic } from './data/useStatistic';
import { Description } from './Styles';

export const Statistic = () => {
  const { t } = useTranslation();

  const { abcsStatistic, refetch } = useStatistic();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const [lifeAreasData, setFifeAreasData] = useState<any>();
  const [emotionsData, setEmotionData] = useState<any>();

  useEffect(() => {
    const lifeAreas = abcsStatistic?.lifeAreas;

    if (!lifeAreas) {
      setFifeAreasData(null);
      return;
    }

    setFifeAreasData({
      labels: lifeAreas.map(value => value.label),
      datasets: [
        {
          data: lifeAreas.map(value => value.count),
        },
      ],
    });
  }, [abcsStatistic]);

  useEffect(() => {
    const emotions = abcsStatistic?.emotions;

    if (!emotions) {
      setEmotionData(null);
      return;
    }

    setEmotionData({
      labels: emotions.map(value => value.label),
      datasets: [
        {
          data: emotions.map(value => value.count),
        },
      ],
    });
  }, [abcsStatistic]);

  if (!emotionsData || !lifeAreasData) {
    return (
      <PageContainer>
        <LoadingIndicator />
      </PageContainer>
    );
  }

  if (!abcsStatistic?.lifeAreas.length && !abcsStatistic?.emotions.length) {
    return (
      <PageContainer>
        <PageHeader title={t('menu.statistic')} />

        <NoEntryMessage />
      </PageContainer>
    );
  }

  const lifeAreasHeight = 70 + lifeAreasData.labels.length * 14 || 0;
  const emotionsHeight = 70 + emotionsData.labels.length * 14 || 0;

  return (
    <PageContainer>
      <PageHeader title={t('menu.statistic')} />

      <div className="chart-container" style={{ position: 'relative', width: '100%', height: `${lifeAreasHeight}px` }}>
        <Bar data={lifeAreasData} options={getConfig(t('routes.statistic.lifeAreas.title'))} />
      </div>
      <Description>{t('routes.statistic.lifeAreas.description')}</Description>

      <br />

      <div className="chart-container" style={{ position: 'relative', width: '100%', height: `${emotionsHeight}px` }}>
        <Bar data={emotionsData} options={getConfig(t('routes.statistic.emotion.title'))} />
      </div>
      <Description>{t('routes.statistic.emotion.description')}</Description>
    </PageContainer>
  );
};

const getConfig = (title: string): any =>
  ({
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      xAxes: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 1,
        },
      },
      yAxes: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 1,
          autoSkip: false,
        },
      },
    },
  } as Chart.ChartOptions);

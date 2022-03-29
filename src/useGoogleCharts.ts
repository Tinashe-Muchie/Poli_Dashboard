import { useState, useEffect} from 'react';

const useGoogleCharts = () => {
  const [google, setGoogle] = useState(null);

  useEffect(()=> {
    if(!google) {
      const head:HTMLHeadElement = document.head;
      let script:HTMLElement = document.getElementById('googleChartsScript');
      if(!script) {
        script = document.createElement('element');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.id = 'googleChartsScript';
      }
    }
  }, [google])

  return google;
}

export default useGoogleCharts;
import { getDocument } from '../../src/display/api';
import { GlobalWorkerOptions } from '../../src/display/worker_options';

describe('DOCUMENT', function() {
  GlobalWorkerOptions.workerSrc = '../../src/core/worker.js';
  debugger;
  // var client = new XMLHttpRequest();
  // client.open('GET', '../pdfs/smlouva_kz.pdf');
  // client.onreadystatechange = function() {
  //   if(client.readyState === 4 && client.status === 200) {
  //     console.log(client.responseText);
  //     debugger;
      getDocument('../pdfs/smlouva_kz.pdf'/*client.responseText*/)
        .then((pdfDoc) => {
          for (let num = 1; num <= pdfDoc.numPages; num++) {
            pdfDoc.getPage(num)
              .then((page) => {
                const canvasContainer = document.getElementById('pdf_content');
                const viewport = page.getViewport(1.3); // scale = 1
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const renderContext = {
                  canvasContext: ctx,
                  viewport,
                };

                canvas.height = viewport.height;
                canvas.width = viewport.width;
                canvasContainer.appendChild(canvas);

                page.render(renderContext);
              });
          }
        });
    // }
  // };
  // client.send();

});

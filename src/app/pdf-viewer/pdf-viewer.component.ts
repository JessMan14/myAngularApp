import { Component, OnInit } from '@angular/core';
// import { pdfDefaultOptions } from '../../projects/ngx-extended-pdf-viewer/src/lib/options/pdf-default-options';
// import { LinkTarget } from '../../projects/ngx-extended-pdf-viewer/src/lib/options/link-target';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {

  //pdfSource =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  pdfSource =  "/assets/example.pdf";
  constructor() { }

  ngOnInit(): void {
    //pdfDefaultOptions.externalLinkTarget = LinkTarget.BLANK;
  }

}

import React, { useState } from 'react';
import { AreaHighlight, Highlight, IHighlight, PdfHighlighter, PdfLoader, Popup } from 'react-pdf-highlighter';
import "./index.scss"
import "react-pdf-highlighter/dist/style.css"


/**
 * @author xu.pengfei
 * @date 2024/10/6 10:16
 */
export default function ReactPdfHighlighter() {
  const [highlights, setHighlights] = useState<IHighlight[]>([])

  return (
    <div className="fa-main">
      <div className="fa-panel">
        1
      </div>
      <div className="fa-panel">
        <div className="fa-pdf-container">
          <PdfLoader
            url="/plugins/pdfjs/test.pdf"
            workerSrc="/plugins/pdfjs/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs"
            beforeLoad={<div>Loading</div>}
          >
            {(pdfDocument) => (
              <PdfHighlighter
                pdfDocument={pdfDocument}
                enableAreaSelection={(event) => event.altKey}
                onScrollChange={() => document.location.hash = ""}
                scrollRef={(scrollTo) => {
                  // scrollViewerTo.current = scrollTo;
                  // scrollToHighlightFromHash();
                }}
                onSelectionFinished={(
                  position,
                  content,
                  hideTipAndSelection,
                  transformSelection,
                ) => (
                  <div>onSelectionFinished</div>
                )}
                highlightTransform={(
                  highlight,
                  index,
                  setTip,
                  hideTip,
                  viewportToScaled,
                  screenshot,
                  isScrolledTo,
                ) => {
                  const isTextHighlight = !highlight.content?.image;

                  const component = isTextHighlight ? (
                    <Highlight
                      isScrolledTo={isScrolledTo}
                      position={highlight.position}
                      comment={highlight.comment}
                    />
                  ) : (
                    <AreaHighlight
                      isScrolledTo={isScrolledTo}
                      highlight={highlight}
                      onChange={(boundingRect) => {
                        console.log(
                          highlight.id,
                          {boundingRect: viewportToScaled(boundingRect)},
                          {image: screenshot(boundingRect)},
                        );
                      }}
                    />
                  );

                  return (
                    <Popup
                      popupContent={<div>{JSON.stringify(highlight)}</div>}
                      onMouseOver={(popupContent) =>
                        setTip(highlight, (highlight) => popupContent)
                      }
                      onMouseOut={hideTip}
                      key={index}
                    >
                      {component}
                    </Popup>
                  );
                }}
                highlights={highlights}
              />
            )}
          </PdfLoader>
        </div>
      </div>
    </div>
  )
}

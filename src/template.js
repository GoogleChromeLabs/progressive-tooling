export default (html, ids, css) => (
  <div>
    <style type="text/css" dangerouslySetInnerHTML={{ __html: css }} />
    <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__EMOTION_CRITICAL_CSS_IDS__ = ${JSON.stringify(ids)};`
      }}
    />
  </div>
);

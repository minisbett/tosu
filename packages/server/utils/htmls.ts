export const icons_images = {
    'github.com': '/images/github-000000.svg',
    'twitter.com': '/images/twitter-1DA1F2.svg',
    'discord.gg': '/images/discord-5865f2.svg',
    'discord.com': '/images/discord-5865f2.svg'
};

export const emptyNotice = `<div class="no-results">No counters<br /><a href="/?tab=1">Go here to get one 👉</a></div>`;
export const emptyCounters = `<div class="no-results">No counters<br />Change your search phrase</div>`;
export const noMoreCounters = `<div class="no-results">Nice job!<br />You downloaded all available pp counters</div>`;

export const iframeHTML = `<iframe src="{URL}" width="{WIDTH}" height="{HEIGHT}" scrolling="no" frameborder="0"></iframe>`;

export const metadataHTML = `
<div>URL: <span nf nft="url" nfv="{COPY_URL}" class="copyable">{TEXT_URL}</span></div>
<div>Resolution: <span nf nft="width" nfv="{COPY_X}" class="copyable">{X}</span> x <span nf nft="height" nfv="{COPY_Y}" class="copyable">{Y}</span></div>
`;

export const nameHTML = `<h4>{NAME}</h4>`;
export const authorHTML = `<span>by {AUTHOR}</span>`;
export const authorLinksHTML = `<a href="{LINK}" target="_blank"><img src="{ICON_URL}" /></a>`;

export const galleryImageHTML = `<img src="{LINK}" />`;

export const resultItemHTML = `
<div class="result-item">
  <div class="ri-head flexer">
    <div>
      {NAME}
      <div class="ri-links flexer">{AUTHOR}{AUTHOR_LINKS}</div>
    </div>
    {BUTTONS}
  </div>
  <hr>
  <div class="ri-gallery flexer">{GALLERY}</div>
  {FOOTER}
</div>`;

export const settingsItemHTML = `
<div class="si flexer">
  <div>
    <h4>{NAME}</h4>
    <p>{DESCRIPTION}</p>
  </div>
  {INPUT}
</div>`;

export const checkboxHTML = `
<label class="si-checkbox">
  <input type="checkbox" name="{NAME}" id="{NAME}" {ADDON} value="{VALUE}" />
  <span class="checkmark"></span>
  <span class="status"></span>
</label>`;

export const inputHTML = `<input type="{TYPE}" id="{NAME}" {ADDON} value="{VALUE}">`;

export const saveSettingsButtonHTML = `<div class="flexer si-btn"><button class="button save-button flexer"><span>Save settings</span></button></div>`;

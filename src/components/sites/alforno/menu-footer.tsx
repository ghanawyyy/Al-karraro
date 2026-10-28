import { Fragment } from "react";
import { appStoreUrl, branches, hotline, whatsappNumber, whatsappUrl } from "./menu-data";

export function MenuFooter() {
  return (
    <footer className="af-menu-footer">
      <svg className="ak-footer-drip" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40V0h1440v40c-30 0-30-14-60-14s-34 22-70 22-30-26-74-26-40 12-80 12-44-20-86-20-36 30-80 30-38-24-78-24-40 16-84 16-40-28-86-28-42 18-82 18-38-10-80-10-40 26-84 26-38-20-80-20-44 14-86 14-40-24-82-24-40 18-80 18-40-12-78-12-42 22-84 22-40-18-80-18-34 16-66 16z" />
      </svg>
      <div className="af-footer-inner">
        <div className="af-footer-apps">
          <div className="af-footer-title">Download Our App</div>
          <a
            className="af-store-badge"
            href={appStoreUrl}
            target="_blank"
            rel="noopener"
            aria-label="Download on the App Store"
          >
            <svg viewBox="0 0 384 512" aria-hidden="true">
              <path
                fill="#ffffff"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.2 14.4 80.9 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-89.8-61.7-91.6zM262.1 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
            <span>
              <span className="af-store-text-small">Available on the</span>
              <span className="af-store-text-large">App Store</span>
            </span>
          </a>
          <a
            className="af-store-badge"
            href={appStoreUrl}
            target="_blank"
            rel="noopener"
            aria-label="Get it on Google Play"
          >
            <svg viewBox="0 0 512 512" aria-hidden="true">
              <path fill="#00A0FF" d="M96 32.3v447.4c0 8.8 10.6 13.2 16.9 7L352.7 256 112.9 25.3C106.6 19.1 96 23.5 96 32.3z" />
              <path fill="#00F076" d="M112.9 25.3 390.5 184 352.7 256z" />
              <path fill="#FFEA00" d="M352.7 256 390.5 328 112.9 486.7z" />
              <path fill="#FF3D3D" d="M390.5 184 452.1 219.2c29.2 16.7 29.2 57 0 73.6L390.5 328 352.7 256z" />
            </svg>
            <span>
              <span className="af-store-text-small">GET IT ON</span>
              <span className="af-store-text-large">Google Play</span>
            </span>
          </a>
        </div>
        <div className="af-footer-locations">
          {branches.map((branch) => (
            <Fragment key={branch.name}>
              <div className="af-branch-name">{branch.name}</div>
              <div className="af-branch-address">{branch.address}</div>
            </Fragment>
          ))}
        </div>
        <div className="af-footer-contact">
          <a className="af-whatsapp-line" href={whatsappUrl} target="_blank" rel="noopener" aria-label={`WhatsApp ${whatsappNumber}`}>
            <span className="af-whatsapp-icon">
              <svg viewBox="0 0 448 512" width="38" height="38" aria-hidden="true">
                <path
                  fill="#e8721c"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 2 131.5 2 253.9c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.5 224.1-221.9 0-59.3-25.2-115-67.1-157.1z"
                />
                <path
                  fill="#0b0710"
                  d="M223.9 438.7h-.1c-33.2 0-65.8-8.9-94.3-25.7l-6.8-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.1 184.6z"
                />
                <path
                  fill="#e8721c"
                  d="M323.4 300.5c-5.5-2.8-32.8-16.2-37.9-18s-8.8-2.8-12.5 2.8-14.3 18-17.6 21.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9-19.4 19-19.4 46.3 19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.7 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.4z"
                />
              </svg>
            </span>
            <span>{whatsappNumber}</span>
          </a>
          <div className="af-hotline-box">
            <span className="af-hotline-label">HOTLINE</span>
            <span className="af-hotline-number">{hotline}</span>
          </div>
          <div className="af-footer-copyright">Copyright© Worldfood 2026</div>
        </div>
      </div>
    </footer>
  );
}

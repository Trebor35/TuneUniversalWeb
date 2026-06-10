"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie_consent";

type CookiePrefs = {
  necessary: true;
  analytics: boolean;
  advertising: boolean;
};

type Props = {
  text: string;
  privacyLabel: string;
  privacyHref: string;
  acceptLabel: string;
  declineLabel: string;
  customizeLabel: string;
  savePrefsLabel: string;
  necessary: string;
  necessaryDesc: string;
  analytics: string;
  analyticsDesc: string;
  advertising: string;
  advertisingDesc: string;
};

export function CookieBanner({
  text,
  privacyLabel,
  privacyHref,
  acceptLabel,
  declineLabel,
  customizeLabel,
  savePrefsLabel,
  necessary,
  necessaryDesc,
  analytics,
  analyticsDesc,
  advertising,
  advertisingDesc,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>({
    necessary: true,
    analytics: true,
    advertising: true,
  });

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function save(p: CookiePrefs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    setVisible(false);
    setShowPanel(false);
  }

  function acceptAll() {
    save({ necessary: true, analytics: true, advertising: true });
  }

  function declineAll() {
    save({ necessary: true, analytics: false, advertising: false });
  }

  function saveCustom() {
    save(prefs);
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop when panel is open */}
      {showPanel && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setShowPanel(false)}
        />
      )}

      {/* Custom preferences panel */}
      {showPanel && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white text-gray-900 shadow-2xl rounded-t-2xl max-h-[80vh] overflow-y-auto">
          <div className="max-w-2xl mx-auto px-5 py-6 space-y-5">
            <h2 className="text-lg font-bold">{customizeLabel}</h2>

            {/* Necessary */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-sm">{necessary}</p>
                <p className="text-xs text-gray-500 mt-0.5">{necessaryDesc}</p>
              </div>
              <div className="shrink-0">
                <span className="inline-block px-2 py-0.5 text-xs bg-gray-200 text-gray-500 rounded-full">
                  ON
                </span>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Analytics */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-sm">{analytics}</p>
                <p className="text-xs text-gray-500 mt-0.5">{analyticsDesc}</p>
              </div>
              <Toggle
                checked={prefs.analytics}
                onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
            </div>

            <hr className="border-gray-100" />

            {/* Advertising */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-sm">{advertising}</p>
                <p className="text-xs text-gray-500 mt-0.5">{advertisingDesc}</p>
              </div>
              <Toggle
                checked={prefs.advertising}
                onChange={(v) => setPrefs((p) => ({ ...p, advertising: v }))}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={saveCustom}
                className="flex-1 px-4 py-2.5 text-sm rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-colors"
              >
                {savePrefsLabel}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main banner */}
      {!showPanel && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white px-4 py-4 shadow-lg"
        >
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm flex-1 leading-relaxed">
              {text}{" "}
              <a href={privacyHref} className="underline hover:text-gray-300 whitespace-nowrap">
                {privacyLabel}
              </a>
            </p>
            <div className="flex flex-wrap gap-2 shrink-0">
              <button
                onClick={() => setShowPanel(true)}
                className="px-4 py-2 text-sm rounded border border-gray-500 hover:bg-gray-700 transition-colors"
              >
                {customizeLabel}
              </button>
              <button
                onClick={declineAll}
                className="px-4 py-2 text-sm rounded border border-gray-500 hover:bg-gray-700 transition-colors"
              >
                {declineLabel}
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm rounded bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-colors"
              >
                {acceptLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative shrink-0 w-11 h-6 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
        checked ? "bg-emerald-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

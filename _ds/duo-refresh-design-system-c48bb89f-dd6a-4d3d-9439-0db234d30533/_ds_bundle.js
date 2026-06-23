/* @ds-bundle: {"format":3,"namespace":"DUORefreshDesignSystem_c48bb8","components":[],"sourceHashes":{"ui_kits/app/components.jsx":"068b73643fc4","ui_kits/app/index.jsx":"2aebb6cc5722","ui_kits/app/views.jsx":"cdf82da96045"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DUORefreshDesignSystem_c48bb8 = window.DUORefreshDesignSystem_c48bb8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/app/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// DUO Refresh — UI Kit components
// All components are exported to `window` so they can be used across babel scripts.

const {
  useState,
  useEffect,
  useRef
} = React;

// ============== Icon (Lucide via CDN data) ==============
// Lightweight inline SVGs for the icons we need. Single-weight, stroke = currentColor.
const ICONS = {
  help: 'M9 9a3 3 0 1 1 4.6 2.5c-.7.5-1.6 1.3-1.6 2.5 M12 17.5v.01',
  grid: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
  chevronRight: 'm9 6 6 6-6 6',
  chevronDown: 'm6 9 6 6 6-6',
  search: 'M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z M21 21l-4.3-4.3',
  plus: 'M12 5v14 M5 12h14',
  edit: 'M12 20h9 M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z',
  trash: 'M3 6h18 M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2 M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6',
  warning: 'M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0z M12 9v4 M12 17v.01',
  upload: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3',
  building: 'M3 21V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14 M13 21V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10 M3 21h18 M7 9h2 M7 13h2 M7 17h2 M16 13h2 M16 17h2',
  bank: 'M3 21h18 M3 10h18 M5 6l7-3 7 3 M5 21V10 M9 21V10 M15 21V10 M19 21V10',
  receipt: 'M4 2h12a2 2 0 0 1 2 2v18l-3-2-3 2-3-2-3 2-3-2V4a2 2 0 0 1 2-2z M8 7h6 M8 11h6 M8 15h4',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  filter: 'M22 3H2l8 9.46V19l4 2v-8.54L22 3z',
  more: 'M12 6h.01 M12 12h.01 M12 18h.01',
  check: 'M20 6 9 17l-5-5',
  x: 'M18 6 6 18 M6 6l12 12',
  arrowRight: 'M5 12h14 M12 5l7 7-7 7',
  inbox: 'M22 12h-6l-2 3h-4l-2-3H2 M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z',
  doc: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8'
};
const Icon = ({
  name,
  size = 16,
  color = 'currentColor',
  stroke = 1.75,
  className = '',
  style = {}
}) => {
  const d = ICONS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      flexShrink: 0,
      ...style
    }
  }, d.split(' M').map((seg, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: (i === 0 ? '' : 'M') + seg
  })));
};

// ============== App Shell ==============
const AppShell = ({
  tabs,
  activeTab,
  onTabChange,
  breadcrumb,
  context,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: "app"
}, /*#__PURE__*/React.createElement("header", {
  className: "app-header"
}, /*#__PURE__*/React.createElement("div", {
  className: "app-header__brand"
}, /*#__PURE__*/React.createElement("div", {
  className: "app-header__logo"
}, /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 40 40"
}, /*#__PURE__*/React.createElement("path", {
  d: "M11 10 h10 a10 10 0 0 1 0 20 h-10 z",
  fill: "#2C5A6A"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "27",
  cy: "27",
  r: "4.5",
  fill: "#85B946"
}))), /*#__PURE__*/React.createElement("div", {
  className: "app-header__title"
}, "DUO", /*#__PURE__*/React.createElement("em", null, "Refresh"))), /*#__PURE__*/React.createElement("div", {
  className: "app-header__ctx"
}, context), /*#__PURE__*/React.createElement("div", {
  className: "app-header__tools"
}, /*#__PURE__*/React.createElement("span", {
  className: "app-header__icon",
  title: "Hilfe"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "help",
  color: "#fff",
  size: 18
})), /*#__PURE__*/React.createElement("span", {
  className: "app-header__icon",
  title: "Apps"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "grid",
  color: "#fff",
  size: 16
})), /*#__PURE__*/React.createElement("span", {
  className: "app-header__avatar"
}, "MS"))), /*#__PURE__*/React.createElement("div", {
  className: "app-subheader"
}, /*#__PURE__*/React.createElement("div", {
  className: "app-subheader__crumbs"
}, breadcrumb.map((b, i) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: i
}, i > 0 && /*#__PURE__*/React.createElement("span", {
  className: "sep"
}, "\u203A"), /*#__PURE__*/React.createElement("span", {
  className: i === breadcrumb.length - 1 ? 'cur' : ''
}, b)))), /*#__PURE__*/React.createElement("div", {
  className: "app-tabs"
}, tabs.map(t => /*#__PURE__*/React.createElement("div", {
  key: t.id,
  className: 'app-tab ' + (t.id === activeTab ? 'app-tab--active' : ''),
  onClick: () => onTabChange(t.id)
}, t.label)))), /*#__PURE__*/React.createElement("main", {
  className: "app-main"
}, children));

// ============== Card ==============
const Card = ({
  title,
  action,
  children,
  flush = false,
  plainHeader = false
}) => /*#__PURE__*/React.createElement("div", {
  className: "card"
}, (title || action) && /*#__PURE__*/React.createElement("div", {
  className: 'card__head ' + (plainHeader ? 'card__head--plain' : '')
}, /*#__PURE__*/React.createElement("div", {
  className: "card__title"
}, title), action), /*#__PURE__*/React.createElement("div", {
  className: 'card__body ' + (flush ? 'card__body--flush' : '')
}, children));

// ============== Buttons ==============
const PrimaryButton = ({
  children,
  onClick,
  disabled,
  icon,
  size
}) => /*#__PURE__*/React.createElement("button", {
  className: 'btn btn--primary ' + (size === 'sm' ? 'btn--sm' : ''),
  onClick: onClick,
  disabled: disabled
}, icon && /*#__PURE__*/React.createElement(Icon, {
  name: icon,
  size: 16,
  color: "#fff"
}), children);
const SecondaryButton = ({
  children,
  onClick,
  danger,
  size
}) => /*#__PURE__*/React.createElement("button", {
  className: 'btn ' + (danger ? 'btn--danger' : 'btn--secondary') + ' ' + (size === 'sm' ? 'btn--sm' : ''),
  onClick: onClick
}, children);
const ActionLink = ({
  children,
  onClick,
  icon = 'plus'
}) => /*#__PURE__*/React.createElement("button", {
  className: "action-link",
  onClick: onClick
}, icon === 'plus' ? /*#__PURE__*/React.createElement("span", {
  className: "action-link__plus"
}, "+") : /*#__PURE__*/React.createElement(Icon, {
  name: icon,
  size: 14,
  color: "#2C5A6A"
}), children);

// ============== Tag ==============
const Tag = ({
  children,
  tone = 'petrol'
}) => /*#__PURE__*/React.createElement("span", {
  className: 'tag tag--' + tone
}, children);

// ============== Form ==============
const Input = ({
  value,
  onChange,
  placeholder,
  ...rest
}) => /*#__PURE__*/React.createElement("input", _extends({
  className: "input",
  value: value,
  onChange: e => onChange?.(e.target.value),
  placeholder: placeholder
}, rest));
const FieldRow = ({
  label,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: "field--row"
}, /*#__PURE__*/React.createElement("label", {
  className: "label--row"
}, label), /*#__PURE__*/React.createElement("div", null, children));
const Radio = ({
  label,
  checked,
  onChange
}) => /*#__PURE__*/React.createElement("label", {
  className: 'radio ' + (checked ? 'radio--on' : ''),
  onClick: onChange
}, /*#__PURE__*/React.createElement("span", {
  className: "radio__dot"
}), /*#__PURE__*/React.createElement("span", null, label));
const Checkbox = ({
  label,
  checked,
  onChange
}) => /*#__PURE__*/React.createElement("label", {
  className: "radio",
  onClick: onChange
}, /*#__PURE__*/React.createElement("span", {
  className: 'checkbox ' + (checked ? 'checkbox--on' : '')
}, "\u2713"), /*#__PURE__*/React.createElement("span", null, label));

// ============== KPI ==============
const KPI = ({
  label,
  value,
  delta,
  deltaNeg,
  currency
}) => /*#__PURE__*/React.createElement("div", {
  className: "kpi"
}, /*#__PURE__*/React.createElement("div", {
  className: "kpi__label"
}, label), /*#__PURE__*/React.createElement("div", {
  className: 'kpi__value ' + (currency ? 'kpi__value--currency' : '')
}, value), delta && /*#__PURE__*/React.createElement("div", {
  className: 'kpi__delta ' + (deltaNeg ? 'kpi__delta--neg' : '')
}, delta));

// ============== List row ==============
const ListRow = ({
  icon,
  title,
  meta,
  onClick
}) => /*#__PURE__*/React.createElement("div", {
  className: "list-row",
  onClick: onClick
}, /*#__PURE__*/React.createElement("div", {
  className: "list-row__left"
}, icon && /*#__PURE__*/React.createElement("div", {
  className: "list-row__lead"
}, /*#__PURE__*/React.createElement(Icon, {
  name: icon,
  size: 16
})), /*#__PURE__*/React.createElement("div", {
  className: "list-row__main"
}, /*#__PURE__*/React.createElement("div", {
  className: "list-row__title"
}, title), meta && /*#__PURE__*/React.createElement("div", {
  className: "list-row__meta"
}, meta))), /*#__PURE__*/React.createElement("span", {
  className: "list-row__chev"
}, "\u203A"));

// ============== Callout ==============
const WarningCallout = ({
  title,
  children,
  onDismiss
}) => /*#__PURE__*/React.createElement("div", {
  className: "callout"
}, /*#__PURE__*/React.createElement("span", {
  className: "callout__icon"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "warning",
  size: 18,
  color: "#B98E00"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "callout__head"
}, title), children && /*#__PURE__*/React.createElement("div", {
  className: "callout__body"
}, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
  className: "action-link",
  style: {
    color: '#5C4A00'
  },
  onClick: onDismiss
}, "Schlie\xDFen"));

// ============== Empty state ==============
const EmptyState = ({
  caption,
  variant = 'doc'
}) => /*#__PURE__*/React.createElement("div", {
  className: "empty"
}, /*#__PURE__*/React.createElement("img", {
  src: variant === 'add' ? '../../assets/empty-add.svg' : '../../assets/empty-doc.svg',
  width: "140",
  height: "98",
  alt: ""
}), /*#__PURE__*/React.createElement("div", {
  className: "empty__caption"
}, caption));

// ============== Drop zone ==============
const DropZone = ({
  onFiles
}) => {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: 'dropzone ' + (hover ? 'dropzone--hover' : ''),
    onDragOver: e => {
      e.preventDefault();
      setHover(true);
    },
    onDragLeave: () => setHover(false),
    onDrop: e => {
      e.preventDefault();
      setHover(false);
      onFiles?.([...e.dataTransfer.files]);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropzone__icon"
  }, "+"), /*#__PURE__*/React.createElement("div", {
    className: "dropzone__title"
  }, "Belege per Drag & Drop hier ablegen"), /*#__PURE__*/React.createElement("div", {
    className: "dropzone__hint"
  }, "Unterst\xFCtzte Formate: PDF, JPG, PNG. Maximal 20 MB je Datei."), /*#__PURE__*/React.createElement(PrimaryButton, {
    onClick: () => onFiles?.([{
      name: 'Rechnung-Mai.pdf',
      size: 184320
    }])
  }, "Dateien ausw\xE4hlen"));
};

// ============== Table ==============
const Table = ({
  columns,
  rows,
  onRowClick
}) => /*#__PURE__*/React.createElement("table", {
  className: "table"
}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
  key: i,
  style: c.align === 'right' ? {
    textAlign: 'right'
  } : {}
}, c.label)), /*#__PURE__*/React.createElement("th", {
  style: {
    width: 36
  }
}))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
  key: i,
  onClick: () => onRowClick?.(r)
}, columns.map((c, j) => /*#__PURE__*/React.createElement("td", {
  key: j,
  className: c.align === 'right' ? 'num' : ''
}, c.render ? c.render(r) : r[c.key])), /*#__PURE__*/React.createElement("td", {
  className: "actions",
  onClick: e => e.stopPropagation()
}, "\u22EE")))));

// ============== File item ==============
const FileItem = ({
  name,
  size,
  status
}) => /*#__PURE__*/React.createElement("div", {
  className: "file-item"
}, /*#__PURE__*/React.createElement("div", {
  className: "file-item__icon"
}, "PDF"), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "file-item__name"
}, name), /*#__PURE__*/React.createElement("div", {
  className: "file-item__meta"
}, size)), status && /*#__PURE__*/React.createElement(Tag, {
  tone: "green"
}, status));

// ============== Side nav ==============
const SideNav = ({
  groups,
  active,
  onSelect
}) => /*#__PURE__*/React.createElement("nav", {
  className: "side-nav"
}, groups.map((g, i) => /*#__PURE__*/React.createElement("div", {
  key: i
}, g.title && /*#__PURE__*/React.createElement("div", {
  className: "side-nav__group"
}, g.title), g.items.map(it => /*#__PURE__*/React.createElement("div", {
  key: it.id,
  className: 'side-nav__item ' + (it.id === active ? 'side-nav__item--active' : ''),
  onClick: () => onSelect(it.id)
}, it.icon && /*#__PURE__*/React.createElement(Icon, {
  name: it.icon,
  size: 16
}), /*#__PURE__*/React.createElement("span", null, it.label))))));

// ============== Export to window ==============
Object.assign(window, {
  Icon,
  AppShell,
  Card,
  PrimaryButton,
  SecondaryButton,
  ActionLink,
  Tag,
  Input,
  FieldRow,
  Radio,
  Checkbox,
  KPI,
  ListRow,
  WarningCallout,
  EmptyState,
  DropZone,
  Table,
  FileItem,
  SideNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/index.jsx
try { (() => {
// DUO Refresh — App entry
const {
  useState: useStateApp
} = React;
const TABS = [{
  id: 'dashboard',
  label: 'Übersicht'
}, {
  id: 'stammdaten',
  label: 'Stammdaten'
}, {
  id: 'belege',
  label: 'Belege'
}, {
  id: 'upload',
  label: 'Upload'
}, {
  id: 'bank',
  label: 'Bank'
}];
const CRUMBS = {
  dashboard: ['DUO GmbH', 'Übersicht'],
  stammdaten: ['DUO GmbH', 'Stammdaten'],
  belege: ['DUO GmbH', 'Belege'],
  upload: ['DUO GmbH', 'Belege', 'Upload'],
  bank: ['DUO GmbH', 'Bank']
};
const App = () => {
  const [tab, setTab] = useStateApp('dashboard');
  return /*#__PURE__*/React.createElement(AppShell, {
    tabs: TABS,
    activeTab: tab,
    onTabChange: setTab,
    breadcrumb: CRUMBS[tab],
    context: "DUO GmbH \xB7 Gesch\xE4ftsjahr 2026"
  }, tab === 'dashboard' && /*#__PURE__*/React.createElement(DashboardView, {
    onNav: setTab
  }), tab === 'stammdaten' && /*#__PURE__*/React.createElement(StammdatenView, null), tab === 'belege' && /*#__PURE__*/React.createElement(BelegeView, null), tab === 'upload' && /*#__PURE__*/React.createElement(UploadView, null), tab === 'bank' && /*#__PURE__*/React.createElement(BankView, null));
};
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/index.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/views.jsx
try { (() => {
// DUO Refresh — page views
const {
  useState: useStateV
} = React;

// ============ Dashboard ============
const DashboardView = ({
  onNav
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
  className: "page-title"
}, /*#__PURE__*/React.createElement("h1", null, "\xDCbersicht"), /*#__PURE__*/React.createElement("div", {
  className: "row"
}, /*#__PURE__*/React.createElement(SecondaryButton, null, "Zeitraum: Mai 2026"), /*#__PURE__*/React.createElement(PrimaryButton, {
  icon: "upload",
  onClick: () => onNav('upload')
}, "Belege hochladen"))), /*#__PURE__*/React.createElement(WarningCallout, {
  title: "Es fehlen Pflichtangaben in den Stammdaten."
}, "Bitte erg\xE4nzen Sie die Steuernummer der Firma, damit Belege an die Buchhaltung \xFCbergeben werden k\xF6nnen."), /*#__PURE__*/React.createElement("div", {
  className: "grid-3",
  style: {
    marginBottom: 20
  }
}, /*#__PURE__*/React.createElement(KPI, {
  label: "Kontostand",
  value: "12.480,55 \u20AC",
  delta: "\u2191 1.204,00 \u20AC heute",
  currency: true
}), /*#__PURE__*/React.createElement(KPI, {
  label: "Offene Belege",
  value: "23",
  delta: "5 davon \xFCberf\xE4llig",
  deltaNeg: true
}), /*#__PURE__*/React.createElement(KPI, {
  label: "Zur Freigabe",
  value: "4",
  delta: "\xDCberweisungen"
})), /*#__PURE__*/React.createElement("div", {
  className: "grid-2"
}, /*#__PURE__*/React.createElement(Card, {
  title: "Aktivit\xE4ten",
  action: /*#__PURE__*/React.createElement(ActionLink, {
    icon: "edit"
  }, "Alle anzeigen"),
  flush: true
}, /*#__PURE__*/React.createElement(ListRow, {
  icon: "bank",
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "4 \xDCberweisungen")),
  meta: "offen zur Freigabe",
  onClick: () => onNav('bank')
}), /*#__PURE__*/React.createElement(ListRow, {
  icon: "receipt",
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "12 Belege")),
  meta: "noch nicht zugeordnet",
  onClick: () => onNav('belege')
}), /*#__PURE__*/React.createElement(ListRow, {
  icon: "inbox",
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "2 Mahnungen")),
  meta: "f\xE4llig in 7 Tagen"
}), /*#__PURE__*/React.createElement(ListRow, {
  icon: "user",
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "1 neuer Gesch\xE4ftspartner")),
  meta: "pr\xFCfen und freigeben",
  onClick: () => onNav('stammdaten')
})), /*#__PURE__*/React.createElement(Card, {
  title: "Schnellaktionen",
  plainHeader: true
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 12
  }
}, /*#__PURE__*/React.createElement(SecondaryButton, {
  onClick: () => onNav('upload')
}, /*#__PURE__*/React.createElement(Icon, {
  name: "upload",
  size: 14
}), "Beleg hochladen"), /*#__PURE__*/React.createElement(SecondaryButton, {
  onClick: () => onNav('bank')
}, /*#__PURE__*/React.createElement(Icon, {
  name: "arrowRight",
  size: 14
}), "\xDCberweisung anlegen"), /*#__PURE__*/React.createElement(SecondaryButton, {
  onClick: () => onNav('stammdaten')
}, /*#__PURE__*/React.createElement(Icon, {
  name: "plus",
  size: 14
}), "Partner anlegen"), /*#__PURE__*/React.createElement(SecondaryButton, null, /*#__PURE__*/React.createElement(Icon, {
  name: "download",
  size: 14
}), "Auswertung exportieren")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    paddingTop: 16,
    borderTop: '1px solid var(--color-border)'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "label",
  style: {
    marginBottom: 8
  }
}, "Steuerberater"), /*#__PURE__*/React.createElement("div", {
  className: "row"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    background: 'var(--color-primary)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: 13
  }
}, "HR"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    fontWeight: 600
  }
}, "Kanzlei Hartmann & Roth"), /*#__PURE__*/React.createElement("div", {
  className: "label"
}, "verbunden seit 12.03.2024")), /*#__PURE__*/React.createElement("div", {
  className: "spacer"
}), /*#__PURE__*/React.createElement(Tag, {
  tone: "green"
}, "Verbunden"))))));

// ============ Stammdaten ============
const stammdatenSections = [{
  title: 'UNTERNEHMEN',
  items: [{
    id: 'firma',
    label: 'Firma & Adresse',
    icon: 'building'
  }, {
    id: 'steuer',
    label: 'Steuerangaben',
    icon: 'receipt'
  }, {
    id: 'bank',
    label: 'Bankverbindungen',
    icon: 'bank'
  }]
}, {
  title: 'PARTNER',
  items: [{
    id: 'kunden',
    label: 'Kunden',
    icon: 'user'
  }, {
    id: 'lieferanten',
    label: 'Lieferanten',
    icon: 'user'
  }]
}, {
  title: 'REFERENZ',
  items: [{
    id: 'zb',
    label: 'Zahlungsbedingungen',
    icon: 'doc'
  }, {
    id: 'konten',
    label: 'Kontenrahmen',
    icon: 'doc'
  }]
}];
const StammdatenView = () => {
  const [active, setActive] = useStateV('firma');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "page-title"
  }, /*#__PURE__*/React.createElement("h1", null, "Stammdaten")), /*#__PURE__*/React.createElement("div", {
    className: "split"
  }, /*#__PURE__*/React.createElement(SideNav, {
    groups: stammdatenSections,
    active: active,
    onSelect: setActive
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, active === 'firma' && /*#__PURE__*/React.createElement(FirmaSection, null), active === 'steuer' && /*#__PURE__*/React.createElement(SteuerSection, null), active === 'bank' && /*#__PURE__*/React.createElement(BankAccountsSection, null), active === 'kunden' && /*#__PURE__*/React.createElement(KundenSection, null), active === 'lieferanten' && /*#__PURE__*/React.createElement(EmptySectionCard, {
    title: "Lieferanten",
    caption: "Keine Lieferanten angelegt."
  }), active === 'zb' && /*#__PURE__*/React.createElement(ZahlungsbedingungenSection, null), active === 'konten' && /*#__PURE__*/React.createElement(EmptySectionCard, {
    title: "Kontenrahmen",
    caption: "Kein Kontenrahmen importiert.",
    variant: "add"
  }))));
};
const FirmaSection = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
  title: "Firma & Adresse",
  action: /*#__PURE__*/React.createElement(ActionLink, {
    icon: "edit"
  }, "Bearbeiten")
}, /*#__PURE__*/React.createElement(FieldRow, {
  label: "Firmenname"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    fontWeight: 600
  }
}, "DUO GmbH")), /*#__PURE__*/React.createElement(FieldRow, {
  label: "Rechtsform"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14
  }
}, "Gesellschaft mit beschr\xE4nkter Haftung")), /*#__PURE__*/React.createElement(FieldRow, {
  label: "Gesch\xE4ftsf\xFChrer"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14
  }
}, "Martina Schubert \xB7 Tobias Lenz")), /*#__PURE__*/React.createElement(FieldRow, {
  label: "Anschrift"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    lineHeight: 1.5
  }
}, "Goethestra\xDFe 14", /*#__PURE__*/React.createElement("br", null), "80336 M\xFCnchen", /*#__PURE__*/React.createElement("br", null), "Deutschland")), /*#__PURE__*/React.createElement(FieldRow, {
  label: "Telefon"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14
  }
}, "+49 89 99 88 77 60")), /*#__PURE__*/React.createElement(FieldRow, {
  label: "E-Mail"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14
  }
}, "kontakt@duo-gmbh.de"))), /*#__PURE__*/React.createElement(Card, {
  title: "Kontaktdaten",
  action: /*#__PURE__*/React.createElement(ActionLink, null, "Hinzuf\xFCgen")
}, /*#__PURE__*/React.createElement(EmptyState, {
  caption: "Keine zus\xE4tzlichen Kontaktdaten vorhanden."
})));
const SteuerSection = () => /*#__PURE__*/React.createElement(Card, {
  title: "Steuerangaben",
  action: /*#__PURE__*/React.createElement(ActionLink, {
    icon: "edit"
  }, "Bearbeiten")
}, /*#__PURE__*/React.createElement(FieldRow, {
  label: "Steuernummer"
}, /*#__PURE__*/React.createElement(Tag, {
  tone: "amber"
}, "Nicht hinterlegt")), /*#__PURE__*/React.createElement(FieldRow, {
  label: "USt-ID"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    fontWeight: 600
  }
}, "DE 287 654 321")), /*#__PURE__*/React.createElement(FieldRow, {
  label: "Finanzamt"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14
  }
}, "M\xFCnchen I")), /*#__PURE__*/React.createElement(FieldRow, {
  label: "Besteuerung"
}, /*#__PURE__*/React.createElement("div", {
  className: "row",
  style: {
    gap: 24
  }
}, /*#__PURE__*/React.createElement(Radio, {
  label: "Sollversteuerung",
  checked: true
}), /*#__PURE__*/React.createElement(Radio, {
  label: "Istversteuerung",
  checked: false
}))), /*#__PURE__*/React.createElement(FieldRow, {
  label: "Optionen"
}, /*#__PURE__*/React.createElement("div", {
  className: "row",
  style: {
    gap: 24
  }
}, /*#__PURE__*/React.createElement(Checkbox, {
  label: "Kleinunternehmer \xA719 UStG",
  checked: false
}), /*#__PURE__*/React.createElement(Checkbox, {
  label: "Reverse-Charge anwenden",
  checked: true
}))));
const BankAccountsSection = () => /*#__PURE__*/React.createElement(Card, {
  title: "Bankverbindungen",
  action: /*#__PURE__*/React.createElement(ActionLink, null, "Hinzuf\xFCgen"),
  flush: true
}, /*#__PURE__*/React.createElement(ListRow, {
  icon: "bank",
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "HypoVereinsbank M\xFCnchen")),
  meta: "IBAN DE89 3704 0044 0532 0130 00 \xB7 Hauptkonto"
}), /*#__PURE__*/React.createElement(ListRow, {
  icon: "bank",
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Sparkasse M\xFCnchen")),
  meta: "IBAN DE54 7015 0000 0123 4567 89"
}));
const KundenSection = () => {
  const rows = [{
    name: 'Maier & Söhne KG',
    ort: 'Augsburg',
    typ: 'Kunde',
    status: 'Aktiv',
    umsatz: '12.488,50 €'
  }, {
    name: 'Kraus GmbH',
    ort: 'München',
    typ: 'Kunde',
    status: 'Aktiv',
    umsatz: '8.910,00 €'
  }, {
    name: 'Bäckerei Wolf',
    ort: 'Rosenheim',
    typ: 'Kunde',
    status: 'In Prüfung',
    umsatz: '0,00 €'
  }, {
    name: 'Atelier Mira Sokolowska',
    ort: 'Berlin',
    typ: 'Kunde',
    status: 'Aktiv',
    umsatz: '4.250,00 €'
  }, {
    name: 'Stadtwerke Freising',
    ort: 'Freising',
    typ: 'Kunde',
    status: 'Gesperrt',
    umsatz: '0,00 €'
  }];
  return /*#__PURE__*/React.createElement(Card, {
    title: "Kunden",
    action: /*#__PURE__*/React.createElement(ActionLink, null, "Hinzuf\xFCgen"),
    flush: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "table-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-pill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: "#8A95A0"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Kunden durchsuchen \u2026"
  })), /*#__PURE__*/React.createElement("span", {
    className: "filter-chip filter-chip--active"
  }, "Aktiv"), /*#__PURE__*/React.createElement("span", {
    className: "filter-chip"
  }, "In Pr\xFCfung"), /*#__PURE__*/React.createElement("span", {
    className: "filter-chip"
  }, "Gesperrt")), /*#__PURE__*/React.createElement(Table, {
    columns: [{
      label: 'Name',
      key: 'name',
      render: r => /*#__PURE__*/React.createElement("b", null, r.name)
    }, {
      label: 'Ort',
      key: 'ort'
    }, {
      label: 'Typ',
      key: 'typ',
      render: r => /*#__PURE__*/React.createElement(Tag, {
        tone: "violet"
      }, r.typ)
    }, {
      label: 'Status',
      key: 'status',
      render: r => /*#__PURE__*/React.createElement(Tag, {
        tone: r.status === 'Aktiv' ? 'green' : r.status === 'Gesperrt' ? 'red' : 'amber'
      }, r.status)
    }, {
      label: 'Umsatz YTD',
      key: 'umsatz',
      align: 'right'
    }],
    rows: rows
  }));
};
const ZahlungsbedingungenSection = () => /*#__PURE__*/React.createElement(Card, {
  title: "Zahlungsbedingungen",
  action: /*#__PURE__*/React.createElement(ActionLink, null, "Hinzuf\xFCgen"),
  flush: true
}, /*#__PURE__*/React.createElement(EmptyState, {
  caption: "Keine Zahlungsbedingungen gefunden."
}));
const EmptySectionCard = ({
  title,
  caption,
  variant
}) => /*#__PURE__*/React.createElement(Card, {
  title: title,
  action: /*#__PURE__*/React.createElement(ActionLink, null, "Hinzuf\xFCgen"),
  flush: true
}, /*#__PURE__*/React.createElement(EmptyState, {
  caption: caption,
  variant: variant
}));

// ============ Belege (table view) ============
const BelegeView = () => {
  const [filter, setFilter] = useStateV('all');
  const all = [{
    nr: 'RE-2026-0142',
    datum: '04.05.2026',
    partner: 'Maier & Söhne KG',
    kategorie: 'Eingangsrechnung',
    status: 'Offen',
    betrag: '1.248,90 €'
  }, {
    nr: 'RE-2026-0141',
    datum: '02.05.2026',
    partner: 'Kraus GmbH',
    kategorie: 'Eingangsrechnung',
    status: 'Bezahlt',
    betrag: '312,00 €'
  }, {
    nr: 'RE-2026-0140',
    datum: '01.05.2026',
    partner: 'Bäckerei Wolf',
    kategorie: 'Ausgangsrechnung',
    status: 'Bezahlt',
    betrag: '86,40 €'
  }, {
    nr: 'RE-2026-0139',
    datum: '28.04.2026',
    partner: 'Stadtwerke Freising',
    kategorie: 'Eingangsrechnung',
    status: 'Überfällig',
    betrag: '417,55 €'
  }, {
    nr: 'RE-2026-0138',
    datum: '26.04.2026',
    partner: 'Atelier Mira Sokolowska',
    kategorie: 'Ausgangsrechnung',
    status: 'Offen',
    betrag: '2.400,00 €'
  }, {
    nr: 'RE-2026-0137',
    datum: '24.04.2026',
    partner: 'A1 Telekom',
    kategorie: 'Eingangsrechnung',
    status: 'Bezahlt',
    betrag: '42,90 €'
  }, {
    nr: 'RE-2026-0136',
    datum: '20.04.2026',
    partner: 'Kraus GmbH',
    kategorie: 'Eingangsrechnung',
    status: 'In Prüfung',
    betrag: '988,00 €'
  }];
  const rows = filter === 'all' ? all : all.filter(r => filter === 'offen' ? r.status === 'Offen' : filter === 'ueberfaellig' ? r.status === 'Überfällig' : filter === 'bezahlt' ? r.status === 'Bezahlt' : true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "page-title"
  }, /*#__PURE__*/React.createElement("h1", null, "Belege"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(SecondaryButton, null, "Exportieren"), /*#__PURE__*/React.createElement(PrimaryButton, {
    icon: "upload"
  }, "Hochladen"))), /*#__PURE__*/React.createElement(Card, {
    flush: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "table-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-pill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: "#8A95A0"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Beleg-Nr., Partner oder Betrag \u2026"
  })), /*#__PURE__*/React.createElement("span", {
    className: 'filter-chip ' + (filter === 'all' ? 'filter-chip--active' : ''),
    onClick: () => setFilter('all')
  }, "Alle"), /*#__PURE__*/React.createElement("span", {
    className: 'filter-chip ' + (filter === 'offen' ? 'filter-chip--active' : ''),
    onClick: () => setFilter('offen')
  }, "Offen"), /*#__PURE__*/React.createElement("span", {
    className: 'filter-chip ' + (filter === 'ueberfaellig' ? 'filter-chip--active' : ''),
    onClick: () => setFilter('ueberfaellig')
  }, "\xDCberf\xE4llig"), /*#__PURE__*/React.createElement("span", {
    className: 'filter-chip ' + (filter === 'bezahlt' ? 'filter-chip--active' : ''),
    onClick: () => setFilter('bezahlt')
  }, "Bezahlt")), /*#__PURE__*/React.createElement(Table, {
    columns: [{
      label: 'Belegnummer',
      key: 'nr',
      render: r => /*#__PURE__*/React.createElement("b", null, r.nr)
    }, {
      label: 'Datum',
      key: 'datum'
    }, {
      label: 'Geschäftspartner',
      key: 'partner'
    }, {
      label: 'Kategorie',
      key: 'kategorie',
      render: r => /*#__PURE__*/React.createElement(Tag, {
        tone: "violet"
      }, r.kategorie === 'Eingangsrechnung' ? 'ER' : 'AR')
    }, {
      label: 'Status',
      key: 'status',
      render: r => /*#__PURE__*/React.createElement(Tag, {
        tone: r.status === 'Bezahlt' ? 'green' : r.status === 'Überfällig' ? 'red' : r.status === 'In Prüfung' ? 'amber' : 'petrol'
      }, r.status)
    }, {
      label: 'Betrag',
      key: 'betrag',
      align: 'right'
    }],
    rows: rows
  })));
};

// ============ Upload ============
const UploadView = () => {
  const [files, setFiles] = useStateV([{
    name: 'Rechnung_Maier_2026-05-04.pdf',
    size: '184 KB',
    status: 'Verarbeitet'
  }, {
    name: 'Tankquittung_Aral_02-05.jpg',
    size: '420 KB',
    status: 'Verarbeitet'
  }]);
  const onFiles = picks => {
    setFiles(prev => [...picks.map(f => ({
      name: f.name,
      size: typeof f.size === 'number' ? Math.round(f.size / 1024) + ' KB' : f.size,
      status: 'In Prüfung'
    })), ...prev]);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "page-title"
  }, /*#__PURE__*/React.createElement("h1", null, "Belege hochladen")), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Neue Belege",
    plainHeader: true
  }, /*#__PURE__*/React.createElement(DropZone, {
    onFiles: onFiles
  })), /*#__PURE__*/React.createElement(Card, {
    title: `Hochgeladene Dateien · ${files.length}`,
    action: /*#__PURE__*/React.createElement(ActionLink, {
      icon: "edit"
    }, "Verwalten")
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 8
    }
  }, files.map((f, i) => /*#__PURE__*/React.createElement(FileItem, {
    key: i,
    name: f.name,
    size: f.size,
    status: f.status
  })))), /*#__PURE__*/React.createElement(Card, {
    title: "Verarbeitungsregeln",
    action: /*#__PURE__*/React.createElement(ActionLink, null, "Hinzuf\xFCgen")
  }, /*#__PURE__*/React.createElement(FieldRow, {
    label: "Eingangsrechnung erkennen"
  }, /*#__PURE__*/React.createElement(Radio, {
    label: "Automatisch (empfohlen)",
    checked: true
  })), /*#__PURE__*/React.createElement(FieldRow, {
    label: "An Steuerberater senden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    label: "Sofort",
    checked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    label: "W\xF6chentlich",
    checked: false
  }), /*#__PURE__*/React.createElement(Radio, {
    label: "Monatlich",
    checked: false
  }))))));
};

// ============ Bank ============
const BankView = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
  className: "page-title"
}, /*#__PURE__*/React.createElement("h1", null, "Startseite Bank"), /*#__PURE__*/React.createElement("div", {
  className: "row"
}, /*#__PURE__*/React.createElement(SecondaryButton, null, "Aktualisieren"), /*#__PURE__*/React.createElement(PrimaryButton, null, "\xDCberweisung anlegen"))), /*#__PURE__*/React.createElement("div", {
  className: "grid-3",
  style: {
    marginBottom: 20
  }
}, /*#__PURE__*/React.createElement(KPI, {
  label: "HypoVereinsbank \u2014 Hauptkonto",
  value: "11.204,55 \u20AC",
  delta: "\u2191 Saldo heute",
  currency: true
}), /*#__PURE__*/React.createElement(KPI, {
  label: "Sparkasse M\xFCnchen",
  value: "1.276,00 \u20AC",
  currency: true
}), /*#__PURE__*/React.createElement(KPI, {
  label: "Letzter Abgleich",
  value: "Vor 12 Min."
})), /*#__PURE__*/React.createElement(Card, {
  title: "Anstehende Aktionen",
  action: /*#__PURE__*/React.createElement(ActionLink, {
    icon: "edit"
  }, "Alle anzeigen"),
  flush: true
}, /*#__PURE__*/React.createElement(ListRow, {
  icon: "arrowRight",
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "4 \xDCberweisungen"), " warten auf Freigabe"),
  meta: "Gesamtbetrag 3.482,90 \u20AC"
}), /*#__PURE__*/React.createElement(ListRow, {
  icon: "download",
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "12 Ums\xE4tze"), " nicht zugeordnet"),
  meta: "Kategorie zuweisen, um automatische Buchung zu erlauben"
}), /*#__PURE__*/React.createElement(ListRow, {
  icon: "receipt",
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "2 Mahnungen"), " in Vorbereitung"),
  meta: "Kraus GmbH, Atelier Mira Sokolowska"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 16
  }
}), /*#__PURE__*/React.createElement(Card, {
  title: "Aktuelle Ums\xE4tze",
  action: /*#__PURE__*/React.createElement(ActionLink, {
    icon: "edit"
  }, "Alle anzeigen"),
  flush: true
}, /*#__PURE__*/React.createElement(Table, {
  columns: [{
    label: 'Datum',
    key: 'datum'
  }, {
    label: 'Verwendungszweck',
    key: 'zweck',
    render: r => /*#__PURE__*/React.createElement("b", null, r.zweck)
  }, {
    label: 'Kategorie',
    key: 'kategorie',
    render: r => r.kategorie ? /*#__PURE__*/React.createElement(Tag, {
      tone: "petrol"
    }, r.kategorie) : /*#__PURE__*/React.createElement(Tag, {
      tone: "amber"
    }, "Nicht zugeordnet")
  }, {
    label: 'Betrag',
    key: 'betrag',
    align: 'right'
  }],
  rows: [{
    datum: '04.05.2026',
    zweck: 'Maier & Söhne KG · RE-2026-0142',
    kategorie: 'Material',
    betrag: '−1.248,90 €'
  }, {
    datum: '02.05.2026',
    zweck: 'SEPA-Eingang Kraus GmbH',
    kategorie: 'Erlös',
    betrag: '+312,00 €'
  }, {
    datum: '01.05.2026',
    zweck: 'Aral Tankstelle',
    kategorie: '',
    betrag: '−68,40 €'
  }, {
    datum: '28.04.2026',
    zweck: 'Stadtwerke Freising',
    kategorie: 'Nebenkosten',
    betrag: '−417,55 €'
  }]
})));

// Export views
Object.assign(window, {
  DashboardView,
  StammdatenView,
  BelegeView,
  UploadView,
  BankView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/views.jsx", error: String((e && e.message) || e) }); }

})();

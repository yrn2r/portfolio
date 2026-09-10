import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="hairline">
      <div className="container-edit py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-paper-dim">
        <p>
          © {year} Yernur. {t.footer.rights}
        </p>
        <a href="#top" className="hover:text-paper transition-colors">
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  )
}

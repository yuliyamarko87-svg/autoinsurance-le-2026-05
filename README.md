# Auto Insurance Landings — Lead Economy Submit 2026-05-19

15 advertorial-style лендов под Auto Insurance (Lead Economy через P2V/Лидпира). Все compliant под правила Lead Economy на 2026-05-19.

## Структура

```
landings/
├── index.html                  # внутренний индекс (для review, не на ads)
├── 01-state-comparison.html
├── 02-switching-ugc.html
├── ...
├── 15-family.html
└── assets/
    ├── styles.css
    └── quote.js
```

## Перед запуском (production-чек)

- [ ] Заменить hero-плейсхолдеры на реальные картинки (см. крео-брифы в `../creo-briefs/`).
- [ ] Подменить `window.OFFER_URL` в каждом ленде на реальный трекинг-линк от RedTrack / Keitaro / ClickFlare.
- [ ] Проверить что `noindex,nofollow` стоит во всех `<head>` (стоит — pre-set).
- [ ] Прогнать каждую страницу через Lighthouse — Performance ≥ 80, Accessibility ≥ 90.
- [ ] Финальный compliance-аудит (см. `../BUNDLES.md` → секция «Compliance чек-лист»).

## Деплой на GitHub Pages

### Вариант A — отдельный публичный репозиторий (рекомендую)

```bash
# из корня папки landings/
cd /Users/uliamartynenko/Desktop/Agents/arbitrage/autoinsurance/ads/submit_2026-05-19/landings

# git уже инициализирован, делаем remote
gh repo create autoinsurance-le-2026-05 --public --source=. --remote=origin --push

# включить Pages с веткой main
gh api repos/:owner/autoinsurance-le-2026-05/pages -X POST \
  -f source.branch=main -f source.path=/

# после ~30 секунд страницы будут доступны на:
# https://<your-username>.github.io/autoinsurance-le-2026-05/01-state-comparison.html
```

### Вариант B — добавить в существующий репо

Если у тебя уже есть `<username>.github.io` репо для прелендов:

```bash
cp -R . /path/to/<username>.github.io/autoinsurance-le-2026-05
cd /path/to/<username>.github.io/autoinsurance-le-2026-05
git add . && git commit -m "auto insurance LE 2026-05-19 bundles" && git push
# URL: https://<username>.github.io/autoinsurance-le-2026-05/01-state-comparison.html
```

## Compliance summary

Все 15 лендов:
- ✅ "Advertorial" тег вверху (Lead Economy mandatory)
- ✅ Нет offer logos / carrier names (Geico, Progressive, etc.)
- ✅ Нет ZIP-кода в headlines (только в форме внутри страницы — это допустимо)
- ✅ Нет senior / retiree language
- ✅ Нет "new rule" / "big change" / "massive change" / legislation hooks
- ✅ Нет "hack" / "they don't want you to know" / overpaying tone
- ✅ Нет government / SNAP / EBT / SS / SSA / DMV / police references
- ✅ Все упоминания rate — ≥ $30/mo или эквивалент ($1/day)
- ✅ Где упоминается actor history — disclaimer "paid actor portrayal" в footer
- ✅ Generic site name (DriverDigest) — не attempts to look like a government agency

## Сабмит

После production-чеклиста и финального compliance-аудита — отправить ассеты на:
- `adcompliance@leadeconomy.com`
- cc: `alyssa@leadeconomy.com`, `lilia@leadeconomy.com`

⚠️ **Запуск только после явного approve от Lead Economy.** Запуск до апрува = бан аккаунта.

## История

- **2026-05-19** — Первичный сабмит, 15 связок, отстроенных от AdPlexity-аудита конкурентов + Lead Economy правил.

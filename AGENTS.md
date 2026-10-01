<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the legal assistant as a global, non-persistent single-session chat; this protects visitor privacy while preserving context during the open page session.
- Route legal-assistant model calls through the server-only Lovable AI Gateway integration; this keeps credentials and legal safety instructions out of the browser.

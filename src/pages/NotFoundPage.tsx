import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useMode } from '../hooks/useMode';

export default function NotFoundPage() {
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';
  const isEditorial = mode === 'editorial';

  let errorLabel: string, titleClass: string, descClass: string;
  if (isTerminal) {
    errorLabel = '$ error --code=404';
    titleClass = 'font-mono';
    descClass = 'text-t-dim';
  } else if (isEditorial) {
    errorLabel = '404';
    titleClass = 'font-fraunces';
    descClass = 'text-e-dim';
  } else {
    errorLabel = '404';
    titleClass = 'font-sora';
    descClass = 'text-b-sub';
  }

  return (
    <Layout>
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-[6vw] text-center">
        <div className={`text-sm font-bold mb-3 ${isTerminal ? 'font-mono text-t-accent' : isEditorial ? 'font-archivo text-e-accent' : 'text-b-accent'}`}>
          {errorLabel}
        </div>
        <h1 className={`text-3xl md:text-5xl font-extrabold ${titleClass}`}>
          Page not found
        </h1>
        <p className={`mt-4 max-w-md ${descClass}`}>
          {isTerminal ? '// this route does not exist in the file system' : "This page doesn't exist — but plenty of others do."}
        </p>
        <div className="mt-8">
          <Button to="/" variant="primary">
            {isTerminal ? '$ cd ~' : 'Back home'}
          </Button>
        </div>
      </section>
    </Layout>
  );
}

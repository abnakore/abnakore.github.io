import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useMode } from '../hooks/useMode';

export default function NotFoundPage() {
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';

  return (
    <Layout>
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-[6vw] text-center">
        <div className={isTerminal ? 'font-mono text-t-accent text-sm mb-3' : 'text-b-accent text-sm font-bold mb-3'}>
          {isTerminal ? '$ error --code=404' : '404'}
        </div>
        <h1 className={`text-3xl md:text-5xl font-extrabold ${isTerminal ? 'font-mono' : 'font-sora'}`}>
          Page not found
        </h1>
        <p className={`mt-4 max-w-md ${isTerminal ? 'text-t-dim' : 'text-b-sub'}`}>
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

import type { ComponentType, JSX } from 'react';

export default function withCenteredWrapper(Component: ComponentType): (
  // biome-ignore lint/suspicious/noExplicitAny: HOCs are expected to have any as a prop type.
  props: any,
) => JSX.Element {
  return (
    // biome-ignore lint/suspicious/noExplicitAny: HOCs are expected to have any as a prop type.
    (props: any) => (
      <main className="flex flex-col items-center justify-center w-full h-full">
        <Component {...props} />
      </main>
    )
  );
}

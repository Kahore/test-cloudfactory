export type FlowReturn<AsyncFunction extends (...args: never[]) => Promise<never>> = Generator<
  ReturnType<AsyncFunction>,
  void,
  Awaited<ReturnType<AsyncFunction>>
>

export const ModalButton = ({
  children,
  className,
  innerModal,
}: {
  children: React.ReactNode;
  className: string;
  innerModal: string;
}) => {
  return <div className={className}>{children}</div>;
};

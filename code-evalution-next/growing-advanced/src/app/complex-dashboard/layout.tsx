export default function RootLayout({
  children,
  users,
  revinue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revinue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revinue}</div>
        </div>
        <div className="flex flex-auto">{notifications}</div>
      </div>
    </>
  );
}

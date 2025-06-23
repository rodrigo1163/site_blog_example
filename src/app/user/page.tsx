export default function UserListPage() {
  return (
    <>
      <h2>user list</h2>
      <UserList />
    </>
  );
}

type UserListProps = {
  id: number;
  name: string;
};

async function fetchUsers(): Promise<UserListProps[]> {
  return new Promise((resolver) => {
    setTimeout(() => {
      resolver([
        { id: 1, name: "lalalau" },
        { id: 2, name: "ui" },
      ]);
    }, 5000);
  });
}

async function UserList() {
  const userList = await fetchUsers();
  console.log({ userList });

  return (
    <div className="mt-20 text-white">
      {userList.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

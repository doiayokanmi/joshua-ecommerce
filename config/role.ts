const roles = [
    {
      name: 'editor', // Replace with your actual role name
      title: 'Editor', // Replace with your actual role title
      description: 'Editor role with CRUD permissions for users',
  
      // Permissions for creating, reading, updating, and deleting documents of the "users" type
      grants: [
        {
          resource: 'users', // Replace with the actual schema type
          actions: ['create', 'read', 'update', 'delete'],
          filter: '_id == $user_id',
        },
      ],
  
      // Optional: Include other permissions or settings as needed
    },
  ];
  
  export default roles;
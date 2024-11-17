const personProfile = {
  id: 101,
  name: {
    firstName: 'John',
    lastName: 'Doe'
  },
  contact: {
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '90210'
    }
  },
  preferences: {
    favoriteColors: ['blue', 'green', 'red'],
    hobbies: ['reading', 'gaming', 'hiking'],
    subscription: {
      newsletter: true,
      emailAlerts: false
    }
  },
  transactions: [
    { id: 1, amount: 200.5, date: '2024-01-01', type: 'deposit' },
    { id: 2, amount: 50.0, date: '2024-01-10', type: 'withdrawal' },
    { id: 3, amount: 150.75, date: '2024-02-01', type: 'deposit' }
  ],
  accountStatus: 'active',
  isVerified: true,
  loginAttempts: 3
}

console.table(personProfile)

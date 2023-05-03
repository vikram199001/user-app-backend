const config = require("../config.js");
const { connection } = require("../config.js");

module.exports = {
  getUserById,
  getAll,
  addUser,
  updateById,
  deleteById,
};

async function addUser(data) {
  const userData = [
    {
      firstName: "Vikram",
      lastName: "Patel",
      email: "v12@gmail.com",
      city: "surat",
    },
    {
      firstName: "Raj",
      lastName: "Patil",
      email: "r12@gamil.com",
      city: "vapi",
    },
    {
      firstName: "Vijay",
      lastName: "Patel",
      email: "v123@gamil.com",
      city: "surat",
    },
    {
      firstName: "Dev",
      lastName: "Patel",
      email: "d12@gmail.com",
      city: "vapi",
    },
    {
      firstName: "Geet",
      lastName: "Patel",
      email: "g12@gmail.com",
      city: "surat",
    },
  ];

  const output = new Promise(function (resolve, reject) {
    connection.query(
      "INSERT INTO users (firstName, lastName, email, city) VALUES ?",
      [
        userData.map((item) => [
          item.firstName,
          item.lastName,
          item.email,
          item.city,
        ]),
      ],
      function (err, result) {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
  return output;
}

async function getAll() {
  const output = new Promise(function (resolve, reject) {
    connection.query(`SELECT * FROM users;`, function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
  return output;
}

async function getUserById(id) {
  const output = new Promise(function (resolve, reject) {
    connection.query(
      `SELECT * FROM users WHERE id = ${id}`,
      function (err, result) {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
  return output;
}

async function updateById(body, id) {
  const { firstName, lastName, email, city } = body;
  const output = new Promise(function (resolve, reject) {
    connection.query(
      `UPDATE users SET firstName= '${firstName}', lastName= '${lastName}', email= '${email}', city='${city}' WHERE id = ${id}`,
      function (err, result) {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
  return output;
}

async function deleteById(body, id) {
  const { firstName, lastName, email, city } = body;
  const output = new Promise(function (resolve, reject) {
    connection.query(
      `delete from users WHERE id = ${id}`,
      function (err, result) {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
  return output;
}

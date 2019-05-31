const todomvc = require('todomvc');

// This property is used to configure the left menu of TodoMVC.
todomvc.learnJson = {
  name: 'Simple Oracle Document Access (SODA)',
  description: 'SODA provides NoSQL-style APIs in Oracle Database',
  homepage: 'https://oracle.github.io/node-oracledb/doc/api.html#-26-simple-oracle-document-access-soda',
  examples: [
    {
      name: 'TodoMVC w/Node.js + SODA',
      url: 'https://github.com/dmcghan/soda-app'
    }
  ],
  link_groups: [
    {
      heading: 'SODA Links',
      links: [
        {
          name: 'Landing Page',
          url: 'https://docs.oracle.com/en/database/oracle/simple-oracle-document-access/index.html'
        },
        {
          name: 'Node.js SODA Doc',
          url: 'https://oracle.github.io/node-oracledb/doc/api.html#-26-simple-oracle-document-access-soda'
        },
        {
          name: 'Blog on GraphQL w/SODA',
          url: 'https://blogs.oracle.com/opal/demo-graphql-with-oracle-database-soda-and-node-oracledb'
        }
      ]
    },
    {
      heading: 'ATP Links',
      links: [
        {
          name: 'Landing Page',
          url: 'https://www.oracle.com/database/autonomous-database.html'
        },
        {
          name: 'For Dummies',
          url: 'https://www.wisdominterface.com/wp-content/uploads/2019/05/ADB-for-Dummies.pdf'
        },
        {
          name: 'Cookbook',
          url: 'https://www.amazon.com/Oracle-Autonomous-Database-Cookbook-Skant/dp/1797781405'
        }
      ]
    }
  ]
};

module.exports.todomvc = todomvc;

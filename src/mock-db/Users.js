import { FaGithub, FaDiscord, FaInstagram, FaSlackHash } from "react-icons/fa";

const Users = 
  [
    {
      "userId": "bif478yfgisjniu",
      "username": "Carlo",
      "password": "stuff",
      "active": false,
      "role": [
        {
          "name": "mentor",
          "value": false
        },
        {
          "name": "mentee",
          "value": true
        }
      ],
      "languages": [
        { 
          "name": "javascript", 
          "value": true
        },
        {
          "name": "java", 
          "value": false
        },
        {
          "name": "ruby", 
          "value": true
        },
        {
          "name": "python", 
          "value": false
        }

      ],
      "socialMedia": [
        {
          "name": "github",
          "value": "https://github.com/CarloSantos11",
          "icon": < FaGithub size = { 30} />
        },
        {
          "name": "discord",
          "value": "https://discord.gg/hsCvcGwA",
          "icon": < FaDiscord size={30} />
        },
        {
          "name": "instagram",
          "value": "",
          "icon": < FaInstagram size={30} />
        },
        {
          "name": "slack",
          "value": "",
          "icon": < FaSlackHash size={30} />
        }
      ]
    },
    {
      "userId": "jhsdbf874wfjenbsk",
      "username": "Ilya",
      "password": "stuff",
      "active": false,
      "role": [
        {
          "name": "mentor",
          "value": true
        },
        {
          "name": "mentee",
          "value": false
        }
      ],
      "languages": [
        {
          "name": "javascript",
          "value": true
        },
        {
          "name": "java",
          "value": true
        },
        {
          "name": "ruby",
          "value": false
        },
        {
          "name": "python",
          "value": true
        }

      ],
      "socialMedia": [
        {
          "name": "github",
          "value": "",
          "icon": < FaGithub size={30} />
        },
        {
          "name": "discord",
          "value": "",
          "icon": < FaDiscord size={30} />
        },
        {
          "name": "instagram",
          "value": "",
          "icon": < FaInstagram size={30} />
        },
        {
          "name": "slack",
          "value": "https://code-for-humans.slack.com/archives/D01KL7UMKMZ",
          "icon": < FaSlackHash size={30} />
        }
      ]
    }
  ]

export default Users

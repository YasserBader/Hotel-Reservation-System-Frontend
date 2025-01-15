const fs = require('fs');
const path = require('path');

// Helper function to create a folder
function createFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Folder created: ${folderPath}`);
  }
}

// Helper function to create a file
function createFile(filePath, content = '') {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`File created: ${filePath}`);
  }
}

// Base folder structure
const basePath = './src';

const structure = {
  app: {
    'app.component.html': '',
    'app.component.scss': '',
    'app.component.ts': '',
    'app.module.ts': '',
    'app-routing.module.ts': '',
    components: {
      'guest-list': {
        'guest-list.component.ts': '',
        'guest-list.component.html': '',
        'guest-list.component.scss': '',
        'guest-list.module.ts': '',
        'guest-details-dialog': {
          'guest-details-dialog.component.ts': '',
          'guest-details-dialog.component.html': '',
          'guest-details-dialog.component.scss': '',
          'guest-details-dialog.module.ts': '',
        },
        'new-guest-dialog': {
          'new-guest-dialog.component.ts': '',
          'new-guest-dialog.component.html': '',
          'new-guest-dialog.component.scss': '',
          'new-guest-dialog.module.ts': '',
        },
      },
      'room-list': {
        'room-list.component.ts': '',
        'room-list.component.html': '',
        'room-list.component.scss': '',
        'room-list.module.ts': '',
        'room-details-dialog': {
          'room-details-dialog.component.ts': '',
          'room-details-dialog.component.html': '',
          'room-details-dialog.component.scss': '',
          'room-details-dialog.module.ts': '',
        },
      },
      'reservation-list': {
        'reservation-list.component.ts': '',
        'reservation-list.component.html': '',
        'reservation-list.component.scss': '',
        'reservation-list.module.ts': '',
      },
      'reservation-calendar': {
        'reservation-calendar.component.ts': '',
        'reservation-calendar.component.html': '',
        'reservation-calendar.component.scss': '',
        'reservation-calendar.module.ts': '',
      },
      'new-reservation-dialog': {
        'new-reservation-dialog.component.ts': '',
        'new-reservation-dialog.component.html': '',
        'new-reservation-dialog.component.scss': '',
        'new-reservation-dialog.module.ts': '',
      },
      sidebar: {
        'sidebar.component.ts': '',
        'sidebar.component.html': '',
        'sidebar.component.scss': '',
        'sidebar.module.ts': '',
      },
    },
    services: {
      'guest.service.ts': '',
      'room.service.ts': '',
      'reservation.service.ts': '',
    },
    shared: {
      constants: {
        'constants.ts': '',
      },
      models: {
        'guest.model.ts': '',
        'room.model.ts': '',
        'reservation.model.ts': '',
      },
      components: {
        'progress-circle': {
          'progress-circle.component.ts': '',
          'progress-circle.component.html': '',
          'progress-circle.component.scss': '',
          'progress-circle.module.ts': '',
        },
      },
    },
  },
  assets: {
    '': {
      '': '',
    },
  },
  environments: {
    'environment.ts': '',
    'environment.prod.ts': '',
  },
  'index.html': '',
  'main.ts': '',
  'polyfills.ts': '',
  'styles.scss': '',
  'test.ts': '',
  'tsconfig.json': '',
  'angular.json': '',
};

// Recursive function to create the folder and file structure
function createStructure(base, obj) {
  Object.entries(obj).forEach(([key, value]) => {
    const fullPath = path.join(base, key);
    if (typeof value === 'string') {
      createFile(fullPath, value);
    } else {
      createFolder(fullPath);
      createStructure(fullPath, value);
    }
  });
}

// Start creating the structure
createStructure(basePath, structure);

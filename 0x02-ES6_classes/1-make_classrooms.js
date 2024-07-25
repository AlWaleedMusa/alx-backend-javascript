#!/usr/bin/env node

import ClassRoom from './0-classroom';

/**
 * Creates an array of ClassRooms with a specific size.
 * @returns An array of ClassRooms.
 */
export default function initializeRooms() {
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];

  return rooms;
}

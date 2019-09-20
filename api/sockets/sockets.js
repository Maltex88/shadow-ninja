module.exports = (io, server) => {
  const rooms = ["general", "party", "trade"];

  let connections = [];
  const users = [];

  io.on("connection", socket => {
    connections.push(socket);
    // add username to chat
    socket.rooms = "general";
    socket.join("general");

    socket.on("disconnect", () => {
      //users.splice(users.indexOf(socket.username), 1)
      connections.splice(connections.indexOf(socket, 1));
      io.sockets.emit("updateusers", users);
    });

    socket.on("adduser", username => {
      const find = users.find(user => user === username);
      if (!find) {
        socket.username = username;
        users.push(username);
      }
      socket.join("general");
      //socket.rooms = 'general';

      io.in(socket.rooms).emit(
        "updatechat",
        "SERVER",
        `You are now connected to ${socket.rooms} room`
      );

      socket
        .to(socket.rooms)
        .emit(
          "updatechat",
          "SERVER",
          username + " has connected to this room" + socket.rooms
        );

      socket.emit("updaterooms", rooms, rooms[0]);
    });

    //send
    socket.on("send", (user, data) => {
      console.log("MSG:", data);
      io.in(socket.rooms).emit("updatechat", users, data);
    });

    // IS TYPING

    socket.on("typing", typing => {
      return;
    });

    // Switch rooms
    socket.on("switchRoom", newroom => {
      socket
        .to(socket.rooms)
        .emit(
          "updatechat",
          "SERVER",
          `${users} has left the ${socket.rooms} room`
        );

      socket.leave(socket.rooms);

      socket.rooms = newroom;
      socket.join(newroom);

      socket.emit("updatechat", "SERVER", "You are in " + newroom);

      socket
        .to(socket.rooms)
        .emit("updatechat", "SERVER", `${users} has joined ${newroom} room`);

      socket.emit("updaterooms", rooms, newroom);
    });
  });
};

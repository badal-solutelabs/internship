function postedBy(parent, args, context) {
  return context.prisma.link({ id: parent.id });
}

module.exports = {
  postedBy
};

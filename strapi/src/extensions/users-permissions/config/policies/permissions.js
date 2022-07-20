module.exports = async (ctx, next) => {
    let role;

    console.log('received call')

    if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
        try {
          const { id, isAdmin = false } = await strapi.plugins[
            'users-permissions'
          ].services.jwt.getToken(ctx);
    
          console.log(`${id} is authorized`)
    
        } catch (err) {
          // It will be there!
    
          return handleErrors(ctx, err, 'unauthorized');
        }
     
}
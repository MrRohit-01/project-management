import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Admin } from '../models/Admin';
import { Customer } from '../models/Customer';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const authStrategy = new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const admin = await Admin.findById(jwt_payload.id);
    if (admin) {
      return done(null, admin);
    }

    const customer = await Customer.findById(jwt_payload.id);
    if (customer) {
      return done(null, customer);
    }

    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
});

export default authStrategy;
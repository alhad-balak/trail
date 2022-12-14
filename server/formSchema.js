module.exports = (sequelize, DataTypes) => {
    const Form = sequelize.define("Form", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mobilenumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      batch: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    return Form;
  };
  
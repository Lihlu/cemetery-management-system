using System.ComponentModel;

namespace CemeteryManagementSystem.Domain.Bookings{
    public enum ReflistBookingType
    {
        [Description("Burial")]
        Burial = 1,
        [Description("Cremation")]
        Cremation = 2,
        [Description("Exhumation")]
        Exhumation = 3,
    }
}
using System.ComponentModel;

namespace CemeteryManagementSystem.Domain.Bookings
{
    public enum ReflistBookingStatus
    {
        [Description("Pending")]
        Pending = 1,
        [Description("Confirmed")]
        Confirmed = 2,
        [Description("Cancelled")]
        Cancelled = 3,
        [Description("Completed")]
        Completed = 4
    }
}